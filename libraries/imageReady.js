!function(g){function i(e){if(void 0===e)throw"Must specify a css attribute name";var t,r=this.getElementsByTagName("*"),a=[];if(g("body")[0].currentStyle)for(var o=(t=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}(e.replace(/-/g," ")).replace(/ /g,"")).substr(0,1).toLowerCase()+t.substr(1),i=0,n=r.length;i<n;i++){(u=r[i]).currentStyle&&("none"==u.currentStyle[o]||a.push(u))}else if(window.getComputedStyle)for(i=0,n=r.length;i<n;i++){var u=r[i];"none"==document.defaultView.getComputedStyle(u,null).getPropertyValue(e)||a.push(u)}return a}g.fn.imageready||(g.fn.imageready=function(r,t){void 0===(t=t||{}).allowTimeout&&(t.allowTimeout=g.fn.imageready.allowTimeout,t.timeoutDuration=g.fn.imageready.timeoutDuration);var a,c=function(e){var o=e.find("img").add(e.filter("img"));if(e.each(function(){g(i.call(this,"background-image")).each(function(){var e,t=g(new Image),r=g(this).css("background-image"),a=/url\(([^)]*)\)/g.exec(r);null!==a&&(e=a[1].replace(/[\"\']/g,""),t.attr("loading","eager"),t.attr("src",e),o=o.add(t))})}),(o.loaded=0)!==o.length)return o}(this);if(!c)return r();function o(){clearTimeout(a);var t=[];return c.each(function(){var e;this._isImageReadyComplete||(t.push(this),e=g(this),console.error("image not loaded in time",e.attr("src")))}),r(g(t))}function d(e){if(clearTimeout(a),e&&e.target&&(c.loaded++,e.currentTarget._isImageReadyComplete=!0),c.length<=c.loaded)return r();t.allowTimeout&&(a=setTimeout(o,t.timeoutDuration))}if(c.each(function(){var e,t,r,a,o,i,n,u,l=g(this);if(t=(e=l)[0],r=!e.attr("src"),a="lazy"===e.attr("loading"),o=t.complete,i=4===t.readyState,n=0<e.height(),u=void 0===t.naturalHeight||0<t.naturalHeight,r||a||o||i||n&&u)return c.loaded++;l.one("load",d),l.one("error",d),l.attr("src",l.attr("src"))}),c.length<=c.loaded)return d();t.allowTimeout&&(a=setTimeout(o,t.timeoutDuration))},g.fn.imageready.timeoutDuration=1,g.fn.imageready.allowTimeout=!1)}(jQuery);