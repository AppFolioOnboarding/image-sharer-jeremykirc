module PageObjects
  module Images
    class ImageCard < AePageObjects::Element
      def link
        node.find('img')[:src]
      end

      def tags
        node.find('.tag-list').text
      end
    end
  end
end
