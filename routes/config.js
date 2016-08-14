var config = {};

config.settings = {};

// sets the number of results shown on the home page
config.settings.num_top_results = 10;

// sets the global date formatting. Uses moment.js date formatting, see more here: http://momentjs.com/docs/#/displaying/
config.settings.date_format = 'DD/MM/YYYY h:mmA';

// sets whether the view count will be shown next to the top results on the homepage/search
config.settings.show_view_count = false;

// sets whether the published date will be shown next to the results on the homepage/search
config.settings.show_published_date = false;

config.settings.sort_by = {field: 'kb_last_updated_date', order: -1}; // see below:
// field options are: 'kb_published_date', 'kb_viewcount', 'kb_last_updated'
// order options are: -1 or 1

// sets the website title
config.settings.website_title = "KAD // Knowledge for App Dev";

// If set to "true", this locks down all pages of the blog and requires an authenticated user
config.settings.password_protect = false;

// Show KB meta data including published date, last updated date and author
config.settings.show_kb_meta = true;

// whether users are allowed to suggest articles without a login
config.settings.suggest_allowed = false;

// Controls whether the authors email address is displayed in the meta. Needs "config.settings.show_kb_meta" set to true
config.settings.show_author_email = false;

// Comma separated list of tags to be featured on the home page
config.settings.featured_tags = "Featured,Sitecore,Sharepoint,BCS,SCPlus,HenrySchein,Tips";

// Controls how many articles are being displayed on the home page for each featured tag
config.settings.featured_tags_limit = 5;

module.exports = config;
