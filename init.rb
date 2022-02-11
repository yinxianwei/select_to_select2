require 'redmine'

Redmine::Plugin.register :select_to_select2 do
  name 'Select To Select2 Plugin'
  author 'Shuhei FURUYA'
  description 'Replace Select Tag to Select2'
  version '0.1.0'
  url 'https://github.com/sf-cola/select_to_select2'
  author_url 'https://github.com/sf-cola'
end

class SelectToSelect2ViewListener < Redmine::Hook::ViewListener

  # Adds javascript and stylesheet tags
  def view_layouts_base_html_head(context)
      javascript_include_tag('select2-4.0.13/select2.min.js', :plugin => :select_to_select2) +
      javascript_include_tag('select2-4.0.13/i18n/zh-CN.js', :plugin => :select_to_select2) +
      javascript_include_tag('slecttoselect2main.js', :plugin => :select_to_select2) +
      stylesheet_link_tag('select2-4.0.13/select2.min.css', :plugin => :select_to_select2)
  end
  
end
