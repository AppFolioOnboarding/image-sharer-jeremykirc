require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  def setup
    @image1 = images(:image1)
    @image2 = images(:image2)
  end

  test 'should fail validation with missing link' do
    @image1.link = ''
    assert_not @image1.valid?
    assert @image1.errors.added?(:link, :blank)
  end

  test 'should fail validation with invalid link' do
    link = 'invalid_url'
    @image1.link = link
    assert_not @image1.valid?
    assert @image1.errors.added?(:link, :invalid, value: link)
  end

  test 'should succeed validation' do
    assert @image1.valid?
    assert @image2.valid?
  end
end
