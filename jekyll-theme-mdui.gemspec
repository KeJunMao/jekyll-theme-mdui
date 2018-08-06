# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-mdui"
  spec.version       = "1.0.0"
  spec.authors       = ["Mysaku"]
  spec.email         = ["Einzmysaku@gmail.com"]

  spec.summary       = "A Jekyll theme based on mdui"
  spec.homepage      = "https://github.com/KeJunMao/jekyll-theme-mdui.git"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets/css|assets/js|_layouts|_includes|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "3.6.2"
  spec.add_runtime_dependency 'jekyll-paginate', '~> 1.1'

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
