module PageObjects
  module Images
    class IndexPage < PageObjects::Document
      require_relative './image_card'

      path '/images'

      collection :image_grid,
                 locator: '#image-grid',
                 item_locator: '.image-card',
                 contains: ImageCard do
      end

      def add_new_image!
        node.click_link('Share an image')
        window.change_to(NewPage)
      end

      def delete_image(image:)
        node.click_button(image.id.to_s)
        yield node.driver.browser.switch_to.alert
      end

      def showing_images?(images:)
        images.each do |image|
          return false unless showing_image?(image: image)
        end
        true
      end

      def showing_image?(image:)
        image_grid.each do |image_card|
          return true if image_card.link == image.link &&
                         image_card.tags == image.tags.join(' ')
        end
        false
      end

      def showing_image_first?(link:, tags: nil)
        image_grid.first.link == link && image_grid.first.tags == tags.join(' ')
      end
    end
  end
end
