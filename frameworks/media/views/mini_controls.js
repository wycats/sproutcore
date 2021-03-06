// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2006-2011 Strobe Inc. and contributors.
//            Portions ©2008-2010 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC */

sc_require('views/media_slider');
/** @class

  (Document Your View Here)

  @extends SC.View
*/
SC.MiniMediaControlsView = SC.View.extend({

  target: null,
  
  childViews: 'playButton timeView minusLabelView volumeView'.w(),
  classNames: 'sc-media-controls',
  
  playObserver: function(){
    if(this.getPath('target.paused')){
      this.get('playButton').set('icon', 'play');
    }else{
      this.get('playButton').set('icon', 'stop');
    }
  }.observes('*target.paused'),
  
  
  playButton: SC.ButtonView.design({
    title: '',
    titleMinWidth: 35,
    icon: 'play',
    noStyle: YES,
    layout: { top: 0, left: 0, width: 20, height:20},
    action: "playPause",
    targetBinding: "*owner.target",
    renderStyle: 'renderImage',
    theme: ''
  }),
  
  timeView: SC.LabelView.design({
    layout: { top: 0, left: 20, width: 60, height:20},
    classNames: 'time',
    textAlign: SC.ALIGN_CENTER,
    valueBinding: '*owner.target.time'
  }),
  minusLabelView: SC.LabelView.design({
    layout: { top: 0, left: 80, width: 20, height:20},
    value: '',
    icon: 'minus'
  }),
  volumeView: SC.SliderView.design({
    layout: { top: 0, left: 100, width: 100, height:20},
    value:0,
    valueBinding: "*owner.target.volume" ,
    minimum: 0,
    maximum: 1,
    step: 0.01
  })
});
