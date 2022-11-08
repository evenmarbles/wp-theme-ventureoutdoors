import {CloudinaryImage} from "@cloudinary/url-gen"
import {scale} from "@cloudinary/url-gen/actions/resize";
import {Delivery} from "@cloudinary/url-gen/actions/delivery";
import {lazyload, responsive, placeholder, HtmlImageLayer} from "@cloudinary/html"

function isNativeLazyload () {
  return 'loading' in HTMLImageElement.prototype;
}

class CloudinaryHelper {

  constructor( cloudConfig, urlConfig ) {
    if ( !CloudinaryHelper.instance ) {
      // this.cloudName = cloudConfig.cloudName
      // this.apiKey = cloudConfig.apiKey
      // this.apiSecret = cloudConfig.apiSecret
      // this.authToken = cloudConfig.authToken

      this.cloudConfig = {
        cloudName: 'ventureoutdoors',
      }
      this.urlConfig = urlConfig

      CloudinaryHelper.instance = this
    }

    return CloudinaryHelper.instance
  }

  createImage() {
    const imgTags = document.querySelectorAll('[data-public-id]')

    for (let i = 0; i < imgTags.length; i++) {
      var imgTag = imgTags[i]

      if (imgTag.hasAttribute('src')) {
        continue;
      }

      this.cloudinaryImage(imgTag)
    }
  }

  cloudinaryImage(imgTag) {
    const image = new CloudinaryImage( imgTag.getAttribute('data-public-id'), this.cloudConfig )
    image
      .delivery(Delivery.dpr('2.0'))
      .format('auto')
      .quality('auto')

    var plugins = []
    if ( !isNativeLazyload() && imgTag.getAttribute('data-lazyload') === 'true' ) {
      plugins.push( lazyload() )
    }
    if ( imgTag.getAttribute('data-responsive') === 'true' ) {
      plugins.push( responsive() )
    } else if ( imgTag.hasAttribute('data-width') ) {
      image.resize(scale().width(imgTag.getAttribute('data-width')))
    } else if ( imgTag.hasAttribute('data-height') ) {
      image.resize(scale().height(imgTag.getAttribute('data-height')))
    }else {
      image.resize(scale().width('auto'))
    }
    if( /*!isNativeLazyload() &&*/ imgTag.getAttribute('data-placeholder') === 'true' ) {
      plugins.push( placeholder( {mode: 'vectorize'} ) )
    }
    new HtmlImageLayer(imgTag, image, plugins, { sdkSemver: "Base Semver", sdkCode: '1', techVersion: '1.0.0'})
  }

}

const instance = new CloudinaryHelper()
Object.freeze(instance)

export default instance