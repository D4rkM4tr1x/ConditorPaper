create extension if not exists pgcrypto;

create table if not exists public.users (
    id uuid primary key references auth.users(id) on delete cascade,
    email text not null unique,
    full_name text,
    phone text,
    avatar_url text,
    role text not null default 'customer' check (role in ('customer', 'admin')),
    is_active boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.categories (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    slug text not null unique,
    description text,
    parent_id uuid references public.categories(id) on delete set null,
    image_url text,
    sort_order integer not null default 0,
    is_active boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.products (
    id uuid primary key default gen_random_uuid(),
    category_id uuid references public.categories(id) on delete set null,
    name text not null,
    slug text not null unique,
    short_description text,
    description text,
    paper_type text not null default 'sugar' check (paper_type in ('sugar', 'waffle', 'rice')),
    size text,
    price numeric(10,2) not null default 0,
    stock integer not null default 0,
    rating numeric(2,1) not null default 0,
    review_count integer not null default 0,
    is_featured boolean not null default false,
    is_new boolean not null default false,
    is_active boolean not null default true,
    featured_image_url text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.product_images (
    id uuid primary key default gen_random_uuid(),
    product_id uuid not null references public.products(id) on delete cascade,
    image_url text not null,
    alt_text text,
    is_primary boolean not null default false,
    sort_order integer not null default 0,
    created_at timestamptz not null default now()
);

create table if not exists public.orders (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references public.users(id) on delete set null,
    order_number text not null unique,
    status text not null default 'pending' check (
        status in ('pending','paid','processing','shipped','completed','cancelled','refunded')
    ),
    subtotal numeric(10,2) not null default 0,
    discount_amount numeric(10,2) not null default 0,
    shipping_fee numeric(10,2) not null default 0,
    total_amount numeric(10,2) not null default 0,
    currency text not null default 'EUR',
    customer_name text,
    customer_email text,
    customer_phone text,
    shipping_address text,
    shipping_city text,
    shipping_postal_code text,
    shipping_country text not null default 'Germany',
    payment_method text,
    coupon_code text,
    notes text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.order_items (
    id uuid primary key default gen_random_uuid(),
    order_id uuid not null references public.orders(id) on delete cascade,
    product_id uuid references public.products(id) on delete set null,
    product_name text not null,
    product_price numeric(10,2) not null,
    quantity integer not null default 1,
    total_price numeric(10,2) not null,
    created_at timestamptz not null default now()
);

create table if not exists public.reviews (
    id uuid primary key default gen_random_uuid(),
    product_id uuid not null references public.products(id) on delete cascade,
    user_id uuid references public.users(id) on delete set null,
    rating integer not null check (rating between 1 and 5),
    title text,
    comment text,
    is_approved boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    constraint reviews_unique_per_user_product unique (product_id, user_id)
);

create table if not exists public.banners (
    id uuid primary key default gen_random_uuid(),
    title text,
    subtitle text,
    image_url text,
    link_url text,
    button_text text,
    position text not null default 'home',
    is_active boolean not null default true,
    sort_order integer not null default 0,
    starts_at timestamptz,
    ends_at timestamptz,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.settings (
    id uuid primary key default gen_random_uuid(),
    key text not null unique,
    value text,
    description text,
    updated_at timestamptz not null default now()
);

create index if not exists idx_users_role on public.users (role);
create index if not exists idx_categories_parent_id on public.categories (parent_id);
create index if not exists idx_categories_is_active_sort on public.categories (is_active, sort_order);
create index if not exists idx_products_category_id on public.products (category_id);
create index if not exists idx_products_is_active on public.products (is_active);
create index if not exists idx_products_is_featured on public.products (is_featured);
create index if not exists idx_products_price on public.products (price);
create index if not exists idx_product_images_product_id on public.product_images (product_id);
create index if not exists idx_product_images_primary on public.product_images (is_primary);
create index if not exists idx_orders_user_id on public.orders (user_id);
create index if not exists idx_orders_status on public.orders (status);
create index if not exists idx_orders_created_at on public.orders (created_at desc);
create index if not exists idx_order_items_order_id on public.order_items (order_id);
create index if not exists idx_order_items_product_id on public.order_items (product_id);
create index if not exists idx_reviews_product_id on public.reviews (product_id);
create index if not exists idx_reviews_user_id on public.reviews (user_id);
create index if not exists idx_reviews_is_approved on public.reviews (is_approved);
create index if not exists idx_banners_is_active_position_sort on public.banners (is_active, position, sort_order);
create index if not exists idx_settings_key on public.settings (key);
