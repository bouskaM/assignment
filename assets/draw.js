 var canvas;

 $(function () {
     canvas = window._canvas = new fabric.Canvas('canvas');
     canvas.isDrawingMode = 1;
     canvas.freeDrawingBrush.color = "black";
     canvas.freeDrawingBrush.width = 25;
     canvas.renderAll();

     resize();

 });

 function resize() {
     var canvasContainer = document.getElementsByClassName("canvas-container")[0];
     var upperCanvas = document.getElementsByClassName("upper-canvas canvas")[0];
     var canvas = document.getElementById("canvas");

     canvasContainer.style.width = "100%";
     upperCanvas.style.width = "100%";
     canvas.style.width = "100%";
 }

 $("#clearBtn").click(function () {
     canvas.clear();
     canvas.isDrawingMode = 1;
     canvas.freeDrawingBrush.color = "black";
     canvas.freeDrawingBrush.width = 25;
     canvas.renderAll();
 });