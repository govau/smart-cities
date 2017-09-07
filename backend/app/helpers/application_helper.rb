
module ApplicationHelper

  def development_server?
    Rails.env.development? && ENV['DEV_SERVER'] == 'true'
  end

  def hashAsset(public_relative_path)
    public_relative_path + "?" + Digest::MD5.file(File.join(Rails.public_path, public_relative_path)).hexdigest
  end

  def public_image_source(image, ext)
    hashAsset "/static/media/#{image}.#{ext}"
  end

  def get_javascript(script)
    path = if development_server?
      "http://localhost:8080/static/js/#{script}"
    else
      "/#{hashes[script]}"
    end
    opts = { src: path, type: 'text/javascript' }
    tag('script', opts, true) + '</script>'.html_safe
  end

  def get_stylesheet(sheet)
    unless development_server?
      path = "/#{hashes[sheet]}"
      opts = { href: path, rel: 'stylesheet' }
      tag 'link', opts
    end
  end

  private
  
  def hashes
    @hashes ||= JSON.parse(File.read(File.join(Rails.public_path,
      'asset-manifest.json')))
  end

end
