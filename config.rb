# ---------------------------------
# Paths
# ---------------------------------
set :css_dir   , "assets/stylesheets"
set :js_dir    , "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir , "assets/fonts"

# ---------------------------------
# Livereload
# ---------------------------------
activate :livereload

# ---------------------------------
# Build-specific configuration
# ---------------------------------
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
  activate :asset_hash
end