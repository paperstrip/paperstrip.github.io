"use strict";(self.webpackChunkwibicom_stater_pack=self.webpackChunkwibicom_stater_pack||[]).push([[327],{1920:(t,e,o)=>{o.r(e);var r=o(5880),i=o(6575),a=o(7571),n=o(9348),s=o.n(n);r.os.registerPlugin(a.I),window.scrollAnimation=new function(){this.scroller=!1,this.init=function(){r.os.registerPlugin(i.u),window.globalScroll.smooth.on("scroll",i.u.update),r.os.ticker.add((function(t){window.globalScroll.smooth.raf(1e3*t)})),r.os.ticker.lagSmoothing(0)},this.initGlobal=function(){},this.trigger=[],this.resetTrigger=function(){this.trigger.forEach((function(t){return t.kill(!0)}));var t=document.querySelector("header");document.documentElement.style.setProperty("--header-height","".concat(t.offsetHeight,"px")),$("[data-append-title]").find("button").removeClass("current").removeClass("past")},this.initView=function(){var t=this;this.resetTrigger(),r.os.matchMedia(),document.querySelectorAll("[data-barba-namespace]:last-child [data-splitting]").forEach((function(e){s()({target:e,by:"chars"}),console.log(e);var o=r.os.timeline({paused:!0});o.fromTo($(e).find(".char"),{duration:.25,stagger:.01,color:"#9A50F9",delay:.1,ease:"power2.out"},{duration:.25,stagger:.01,color:"#3EFA94",ease:"power2.out",delay:.1},"showLetter"),t.trigger.push(i.u.create({trigger:e,scrub:!0,animation:o,marker:!0}))})),r.os.utils.toArray("[data-barba-namespace]:last-of-type section").forEach((function(e,o){var a=r.os.to(e,{scale:.4});t.trigger.push(i.u.create({trigger:e,start:"bottom bottom",endTrigger:"footer",invalidateOnRefresh:!0,pin:!0,scrub:!0,pinSpacing:!1,animation:a}))}))},this.addAnimation=function(){this.resetTrigger()},this.initEnterAnimation=function(){},this.lazyload=function(){r.os.utils.toArray("[data-barba-namespace]:last-of-type .container").forEach((function(t,e){i.u.create({trigger:t,start:"-50% bottom",once:!0,onEnter:function(){window.imageLoader.lazy(t)},onEnterBack:function(){window.imageLoader.lazy(t)}})}))},this.update=function(){i.u.refresh(!1)}}}}]);