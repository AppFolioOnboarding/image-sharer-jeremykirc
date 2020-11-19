require 'uri'

class Image < ApplicationRecord
  acts_as_taggable_on :tags

  validates :link,
            presence: true,
            format: URI.regexp(%w[http https])
end
