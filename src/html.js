/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import favicon from './img/favicon.ico'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends Component {
  render () {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{__html: inlinedStyles}}
        />
      )
    }
    return (
      <html lang='en' className='has-navbar-fixed-top'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
          {this.props.headComponents}
          < link rel = 'shortcut icon'
          href = $ {
            config.siteUrl + pathPrefix
          }
          /icons/icon - 512 x512.png ` />
          {css}
        </head>
        <body>
          <div
            id='___gatsby'
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/js/toggle.js'} />
        </body>
      </html>
    )
  }
}
