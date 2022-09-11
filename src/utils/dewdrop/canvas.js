"use strict";var __assign=function(){return(__assign=Object.assign||function(i){for(var o,r=1,a=arguments.length;r<a;r++)for(var l in o=arguments[r])Object.prototype.hasOwnProperty.call(o,l)&&(i[l]=o[l]);return i}).apply(this,arguments)},formatChartData_1=(exports.__esModule=!0,exports.drawCockroachWay=exports.drawSmallWay=exports.drawBigEyeWay=exports.drawBigWay=exports.drawDishWay=exports.drawDiagonalLine=exports.drawHollowCircle=exports.drawSolidCircle=exports.drawText=exports.drawGrid=exports.getBullseye=void 0,require("./formatChartData"));function getBullseye(i){var o=i.row,r=i.column,a=i.origin,l=i.cellWidth,i=i.cellHeight;return[r*l+l/2+a[0],o*i+i/2+a[1]]}function drawGrid(i,o){for(var r=o.rows,a=o.columns,l=o.gridLineColor,t=o.origin,e=o.gridLineWidth,n=o.cellWidth,s=o.cellHeight,d=o.skipOddLine,c=n*a+e,h=s*r+e,g=0;g<=a;g++){var f=g*n+t[0];g%2&&d||(i.beginPath(),i.lineWidth=e,i.strokeStyle=l,i.moveTo(f,Math.floor(t[1])),i.lineTo(f,Math.floor(h+t[1])),i.stroke())}for(g=0;g<=r;g++){var w=g*s+t[1];g%2&&d||(i.beginPath(),i.lineWidth=e,i.strokeStyle=l,i.moveTo(Math.floor(t[0]),w),i.lineTo(Math.floor(t[0]+c),w),i.stroke())}}function drawText(i,o){var r=o.x,a=o.y,l=o.text,t=o.color,e=o.fontSize,n=o.fontFamily,n=void 0===n?"Microsoft YaHei":n,o=o.fontWeight,o=void 0===o?400:o;i.beginPath(),i.font="".concat(o," ").concat(e," ").concat(n),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.fillText(l,r,a),i.stroke()}function drawSolidCircle(i,o){var r=o.x,a=o.y,l=o.color,o=o.radius;i.beginPath(),i.fillStyle=l,i.arc(r,a,o,0,360,!1),i.fill()}function drawHollowCircle(i,o){var r=o.x,a=o.y,l=o.color,t=o.radius,e=o.fillColor,o=o.lineWidth,o=void 0===o?1:o;i.beginPath(),i.lineWidth=o,i.fillStyle=e,i.strokeStyle=l,i.arc(r,a,t,0,360,!1),i.fill(),i.stroke()}function drawDiagonalLine(i,o){var r=o.color,a=o.offset,a=void 0===a?1:a,l=o.lineCap,l=void 0===l?"butt":l,t=o.lineWidth,t=void 0===t?1:t,e=o.bottomLeftX,n=o.bottomLeftY,s=o.topRightX,o=o.topRightY;e+=a,n-=a,s-=a,o+=a,i.beginPath(),i.lineCap=l,i.lineWidth=t,i.strokeStyle=r,i.moveTo(e,n),i.lineTo(s,o),i.stroke()}function drawDishWay(s,i,o,d){void 0===d&&(d=[0,0]);var r=((i=(0,formatChartData_1.dishWay)(i,o.rows))[i.length-1]||[]).filter(Boolean),c=o.gridLineWidth,h=o.cellWidth,g=o.cellHeight,f=o.textMap,w=o.colorMap,a=o.pairRadius,u=void 0===a?3:a,a=[c/2,c/2],i=1===r.length&&r[0].inquiry?i.slice(-o.columns):i.slice(-(o.columns-1));d[0]+=a[0],d[1]+=a[1],drawGrid(s,__assign(__assign({},o),{origin:d})),i.forEach(function(i,n){i.forEach(function(i,o){var r,a,l,t,e;i&&(e=(o=getBullseye({row:o,column:n,origin:d,cellWidth:h,cellHeight:g}))[0],o=o[1],l=f[i.winner],a=w[i.winner],r=Math.floor((h-c)/2),drawSolidCircle(s,{x:e,y:o,color:a,radius:r}),drawText(s,{x:e,y:o,text:l,color:"#fff",fontSize:"".concat(h/2+2,"px")}),"0"!==i.pair&&(a={color:"#fff",radius:u},l=e+Math.sin(2*Math.PI/360*315)*r,t=o-Math.cos(2*Math.PI/360*315)*r,e=e+Math.sin(2*Math.PI/360*135)*r,o=o-Math.cos(2*Math.PI/360*135)*r,"1"===i.pair&&drawHollowCircle(s,__assign(__assign({},a),{x:l,y:t,fillColor:w.banker})),"2"!==i.pair&&drawHollowCircle(s,__assign(__assign({},a),{x:l,y:t,fillColor:w.banker})),drawHollowCircle(s,__assign(__assign({},a),{x:e,y:o,fillColor:w.player}))))})}),s.closePath()}function drawBigWay(c,i,o,h){void 0===h&&(h=[0,0]);var r=((i=(0,formatChartData_1.bigWay)(i,o.rows))[i.length-1]||[]).filter(Boolean),g=o.gridLineWidth,f=o.cellWidth,w=o.cellHeight,u=o.colorMap,a=o.lineWidth,y=void 0===a?1:a,a=o.pairRadius,p=void 0===a?1.5:a,a=[g/2,g/2],i=1===r.length&&r[0].inquiry?i.slice(-o.columns):i.slice(-(o.columns-1));h[0]+=a[0],h[1]+=a[1],drawGrid(c,__assign(__assign({},o),{origin:h})),i.forEach(function(i,d){i.forEach(function(i,o){var r,a,l,t,e,n,s;i&&(r=(a=getBullseye({row:o,column:d,origin:h,cellWidth:f,cellHeight:w}))[0],a=a[1],l=u[i.winner],drawHollowCircle(c,{x:r,y:a,color:l,radius:l=(f-g-y)/2,fillColor:"transparent",lineWidth:y}),"0"!==i.pair&&(n={color:"#fff",radius:p},t=r+Math.sin(2*Math.PI/360*315)*l,e=a-Math.cos(2*Math.PI/360*315)*l,s=r+Math.sin(2*Math.PI/360*135)*l,l=a-Math.cos(2*Math.PI/360*135)*l,"1"===i.pair&&drawHollowCircle(c,__assign(__assign({},n),{x:t,y:e,fillColor:u.banker})),"2"!==i.pair&&drawHollowCircle(c,__assign(__assign({},n),{x:t,y:e,fillColor:u.banker})),drawHollowCircle(c,__assign(__assign({},n),{x:s,y:l,fillColor:u.player}))),1===i.tieCount?(t=d*f+h[0],e=(o+1)*w+h[1],n=(d+1)*f+h[0],s=o*f+h[1],drawDiagonalLine(c,{color:u.tie,bottomLeftX:t,bottomLeftY:e,topRightX:n,topRightY:s,lineWidth:y})):1<i.tieCount&&drawText(c,{x:r,y:a,text:String(i.tieCount),color:u.tie,fontSize:"".concat(f/2+2,"px")}))})}),c.closePath()}function drawBigEyeWay(l,i,o,t){void 0===t&&(t=[0,0]);var r=((i=(0,formatChartData_1.bigEyeWay)(i,o.rows))[i.length-1]||[]).filter(Boolean),e=o.gridLineWidth,n=o.cellWidth,s=o.cellHeight,d=o.colorMap,a=o.skipOddLine,c=o.lineWidth,h=void 0===c?1:c,c=[e/2,e/2],i=1===r.length&&r[0].inquiry?i.slice(-o.columns):i.slice(-(o.columns-1));t[0]+=c[0],t[1]+=c[1],drawGrid(l,__assign(__assign({},o),{origin:t,skipOddLine:a})),i.forEach(function(i,a){i.forEach(function(i,o){var r;i&&(r=(o=getBullseye({row:o,column:a,origin:t,cellWidth:n,cellHeight:s}))[0],o=o[1],i=d[i.winner],drawHollowCircle(l,{x:r,y:o,color:i,radius:(n-e-h)/2,fillColor:"transparent",lineWidth:h}))})})}function drawSmallWay(l,i,o,t){void 0===t&&(t=[0,0]);var r=((i=(0,formatChartData_1.smallWay)(i,o.rows))[i.length-1]||[]).filter(Boolean),e=o.gridLineWidth,n=o.cellWidth,s=o.cellHeight,d=o.colorMap,a=o.skipOddLine,c=[e/2,e/2],i=1===r.length&&r[0].inquiry?i.slice(-o.columns):i.slice(-(o.columns-1));t[0]+=c[0],t[1]+=c[1],drawGrid(l,__assign(__assign({},o),{origin:t,skipOddLine:a})),i.forEach(function(i,a){i.forEach(function(i,o){var r;i&&(r=(o=getBullseye({row:o,column:a,origin:t,cellWidth:n,cellHeight:s}))[0],o=o[1],i=d[i.winner],drawSolidCircle(l,{x:r,y:o,color:i,radius:(n-e)/2}))})}),l.closePath()}function drawCockroachWay(e,i,o,n){void 0===n&&(n=[0,0]);var r=((i=(0,formatChartData_1.cockroachWay)(i,o.rows))[i.length-1]||[]).filter(Boolean),a=o.gridLineWidth,s=o.cellWidth,d=o.cellHeight,c=o.colorMap,l=o.skipOddLine,t=o.lineWidth,h=void 0===t?1:t,t=[a/2,a/2],i=1===r.length&&r[0].inquiry?i.slice(-o.columns):i.slice(-(o.columns-1));n[0]+=t[0],n[1]+=t[1],drawGrid(e,__assign(__assign({},o),{origin:n,skipOddLine:l})),i.forEach(function(i,t){i.forEach(function(i,o){var r,a,l;i&&(i=c[i.winner],r=t*s+n[0],a=(o+1)*d+n[1],l=(t+1)*s+n[0],o=o*s+n[1],drawDiagonalLine(e,{color:i,bottomLeftX:r,bottomLeftY:a,topRightX:l,topRightY:o,lineWidth:h}))})}),e.closePath()}exports.getBullseye=getBullseye,exports.drawGrid=drawGrid,exports.drawText=drawText,exports.drawSolidCircle=drawSolidCircle,exports.drawHollowCircle=drawHollowCircle,exports.drawDiagonalLine=drawDiagonalLine,exports.drawDishWay=drawDishWay,exports.drawBigWay=drawBigWay,exports.drawBigEyeWay=drawBigEyeWay,exports.drawSmallWay=drawSmallWay,exports.drawCockroachWay=drawCockroachWay;