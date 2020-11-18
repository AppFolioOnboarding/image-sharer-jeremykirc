require 'uri'

class Image < ApplicationRecord
  validates :link,
            presence: true,
            format: URI.regexp(%w[http https])
end
