!function(){"use strict";function e(e){return JSON.stringify(JSON.parse(e))}function t(e,t,n){var a=JSON.stringify(JSON.parse(e),null,n);return"tab"===t&&(a=a.replace(/^\s+/gm,function(e){return e.replace(/ /g,"\t")})),a}function n(e){a||(a=document.createElement("andypf-json-viewer"),a.id="json",a.expanded=!0,a.indent=2,a.showDataTypes=!1,a.showToolbar=!0,a.showSize=!0,a.showCopy=!0,a.expandIconType="square",$("#viewer").html(a)),a.setAttribute("theme","1"===localStorage.getItem("DARK")?"monokai":"default-light");try{a.data=JSON.parse(e)}catch(e){a.data=e.message}}var a;$(".theme").click(function(){a&&a.setAttribute("theme","1"===localStorage.getItem("DARK")?"monokai":"default-light")}),window.json={minify:e,format:t,view:n}}();