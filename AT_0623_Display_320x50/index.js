(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.dots = function() {
	this.initialize(img.dots);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,653);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head11 = function() {
	this.initialize(img.head11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head21 = function() {
	this.initialize(img.head21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head31 = function() {
	this.initialize(img.head31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head41 = function() {
	this.initialize(img.head41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.head42 = function() {
	this.initialize(img.head42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.logo_large = function() {
	this.initialize(img.logo_large);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.no = function() {
	this.initialize(img.no);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,100);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.product_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.product();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.product_1, new cjs.Rectangle(0,0,320,50), null);


(lib.no_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.no_1, new cjs.Rectangle(0,0,320,50), null);


(lib.logo_large_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo_large();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_large_1, new cjs.Rectangle(0,0,320,50), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,320,50), null);


(lib.image2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image2_1, new cjs.Rectangle(0,0,320,50), null);


(lib.image1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.image1_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head42_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head42();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head42_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head41_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head41();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head41_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head31();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head31_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head21_1, new cjs.Rectangle(0,0,320,50), null);


(lib.head11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.head11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head11_1, new cjs.Rectangle(0,0,320,50), null);


(lib.hand_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hand();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(0,0,320,50), null);


(lib.dotsamn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.dots();
	this.instance.setTransform(0,0,0.5092,0.5092);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dotsamn, new cjs.Rectangle(0,0,332.6,332.6), null);


(lib.disc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAEIACgHIAHAAIgCAHg");
	this.shape.setTransform(66.55,-22.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAUQgEgDgCgEQgCgEAAgFQAAgGADgGQADgGAFgEQAFgDAFAAQAHAAAFAFQAEAFAAAIIAAAFIgeAAIAAACQAAAGADADQACADAEAAQADAAADgCQAEgDACgEIAHAAQgCAFgFAFQgFAFgHAAQgEAAgEgCgAgEgMQgEADgCAGIAXAAIAAgBQAAgFgDgDQgDgDgEAAQgDAAgEADg");
	this.shape_1.setTransform(63.525,-23.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNASQgFgDABgIIAHgBIABAFIADAEQADABADAAQAEAAACgCQACgCAAgCIgBgEIgHgEIgGgCIgEgEQgCgCAAgDQAAgFAEgDQAEgEAGAAQAIAAAEAEQAEAEAAAFIgHABQAAgEgCgCQgDgCgEAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAKAEQADADAAAFIgBAGQgCADgEACQgEACgEAAQgIAAgFgEg");
	this.shape_2.setTransform(59.3727,-23.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_3.setTransform(55.075,-23.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGAdIAGgZIABgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIgFgBQgDAAgEACQgCACgCADQgCADgCAIIgEASIgHAAIAMg5IAHAAIgEAWIAGgFQAEgCADAAQAFAAADADQADADAAAEIgCAHIgEAZg");
	this.shape_4.setTransform(50.65,-24.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNARQgEgEAAgIQAAgGACgGQADgHAFgDQAFgEAGAAQAGAAAEAEQAEAEAAAGIgHABQAAgEgCgDQgCgCgEAAQgDAAgDADQgEADgBAFQgCAFAAAFQAAAFACADQADACADAAQACAAAEgCQADgDACgFIAHAAQgDAIgFAEQgFAEgFAAQgHAAgEgFg");
	this.shape_5.setTransform(46.675,-23.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgOAVIAJgoIAFAAIgBAIQACgFADgCQADgCAEAAIAEABIgCAHIgFgBQgDAAgEAEQgDAEgCAKIgEAQg");
	this.shape_6.setTransform(43.55,-23.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQASQgDgCAAgEIACgJIAFgXIAHAAIgGAZIgBAFQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIAEABIAGgBQACgBACgDIADgGIACgGIAEgSIAHAAIgJAoIgGAAIABgHQgGAIgIAAQgFAAgDgDg");
	this.shape_7.setTransform(39.825,-23.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVAdIAMg4IAHAAIgCAGQAEgEACgCIAGgBQAGAAAEAEQAEAEAAAJQAAAGgDAFQgBAFgDADQgDADgEACQgDABgEAAQgGAAgEgHIgFAWgAABgVIgDAEIgEAHIgBAHIABAGIADAEIAEABQAGAAAEgGQAEgGAAgHQAAgGgDgDQgDgCgDAAIgFABg");
	this.shape_8.setTransform(35.05,-23.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAdIAIgjIgGAAIABgGIAGAAIABgFIACgGIADgEIAGgBIAHABIgBAGIgFgBIgEABIgBAFIgBAEIAIAAIgCAGIgIAAIgGAjg");
	this.shape_9.setTransform(30.35,-24.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAUQgFgCgCgEQgBgEAAgFQgBgLAIgIQAFgHAJAAQAHAAAFAFQAEAFAAAIQABAGgDAGQgDAGgFADQgFAEgFAAQgGAAgDgCgAgCgOQgDACgCADQgDADAAAEIgBAGQAAAGADADQACADAFAAIADgBIAEgCIADgFIACgFIABgGQAAgGgCgDQgDgDgEAAQgDAAgCABg");
	this.shape_10.setTransform(26.5,-23.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNASQgFgDABgIIAHgBIABAFIADAEQADABADAAQAEAAACgCQACgCAAgCIgBgEIgHgEIgGgCIgEgEQgCgCAAgDQAAgFAEgDQAEgEAGAAQAIAAAEAEQAEAEAAAFIgHABQAAgEgCgCQgDgCgEAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAKAEQADADAAAFIgBAGQgCADgEACQgEACgEAAQgIAAgFgEg");
	this.shape_11.setTransform(20.1227,-23.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKAUQgEgDgCgEQgCgEAAgFQAAgGADgGQADgGAFgEQAFgDAFAAQAHAAAFAFQAEAFAAAIIAAAFIgeAAIAAACQAAAGADADQACADAEAAQADAAADgCQAEgDACgEIAHAAQgCAFgFAFQgFAFgHAAQgEAAgEgCgAgEgMQgEADgCAGIAXAAIAAgBQAAgFgDgDQgDgDgEAAQgDAAgEADg");
	this.shape_12.setTransform(15.875,-23.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIAbQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBIABgGIAGgXIgGAAIABgGIAGAAIACgKIAHgEIgDAOIAGAAIgBAGIgGAAIgEAWIgBAFIAAACIACAAIAEAAIgBAGIgEABQgEAAgDgCg");
	this.shape_13.setTransform(12.85,-24.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_14.setTransform(9.225,-23.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAbQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgGIAEgXIgFAAIABgGIAGAAIACgKIAHgEIgDAOIAGAAIgBAGIgHAAIgDAWIgBAFIABACIABAAIAEAAIgBAGIgEABQgEAAgCgCg");
	this.shape_15.setTransform(6.25,-24.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNASQgFgDABgIIAHgBIABAFIADAEQADABADAAQAEAAACgCQACgCAAgCIgBgEIgHgEIgGgCIgEgEQgCgCAAgDQAAgFAEgDQAEgEAGAAQAIAAAEAEQAEAEAAAFIgHABQAAgEgCgCQgDgCgEAAQgDAAgCABQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABIAFADIAKAEQADADAAAFIgBAGQgCADgEACQgEACgEAAQgIAAgFgEg");
	this.shape_16.setTransform(2.9227,-23.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAdIAKg5IAIAAIgMA5g");
	this.shape_17.setTransform(-2.05,-24.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJAdIAMg5IAGAAIgLA5g");
	this.shape_18.setTransform(-3.8,-24.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_19.setTransform(-7.075,-23.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAHAVIAFgZIABgGIgBgDIgFgBQgFAAgDAEQgFADgBAJIgFATIgHAAIAJgoIAGAAIgBAHIAHgGQADgCAEAAQAFAAADADQADACAAAFIgBAHIgFAYg");
	this.shape_20.setTransform(-13.725,-23.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJAdIAJgpIAGAAIgHApgAAAgUIACgIIAHAAIgCAIg");
	this.shape_21.setTransform(-16.5,-24.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgKAUQgEgDgCgEQgCgEAAgFQAAgGADgGQADgGAFgEQAFgDAFAAQAHAAAFAFQAEAFAAAIIAAAFIgeAAIAAACQAAAGADADQACADAEAAQADAAADgCQAEgDACgEIAHAAQgCAFgFAFQgFAFgHAAQgEAAgEgCgAgEgMQgEADgCAGIAXAAIAAgBQAAgFgDgDQgDgDgEAAQgDAAgEADg");
	this.shape_22.setTransform(-21.975,-23.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAdIAKg5IAIAAIgLA5g");
	this.shape_23.setTransform(-24.9,-24.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAbQgDgCgCgFIgCAIIgGAAIAMg4IAHAAIgEAUIAFgEIAFgBQAGAAAEAEQAEAFAAAHQAAAFgBAFIgEAIIgFAFIgFACIgFABQgDAAgDgCgAgCgEQgDACgCAGIgCAHIAAACQAAAFADADQACACAEAAQADAAADgCQADgDACgFQACgGAAgEQAAgFgCgDQgDgCgEAAQgDAAgDADg");
	this.shape_24.setTransform(-28.175,-24.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_25.setTransform(-32.575,-23.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgIAdIALg5IAHAAIgMA5g");
	this.shape_26.setTransform(-35.45,-24.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAdIAIgpIAGAAIgIApgAABgUIABgIIAIAAIgCAIg");
	this.shape_27.setTransform(-37.15,-24.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_28.setTransform(-40.475,-23.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgMAVIgGgpIAGAAIAEAWIACAMIAFgKIANgYIAHAAIgWApg");
	this.shape_29.setTransform(-44.2,-23.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgPASQgDgDAAgFQAAgEABgCQACgDADgBIAGgCIAIgBIAKgBIAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgCgFAAQgDAAgDACQgDACgBAEIgHgBQACgGAFgDQAFgEAGAAQAHAAAFAEQADADAAAEIgBAIIgCAJIgBAIIABAGIgHAAIgBgFIgHAEIgGACQgGAAgEgEgAAHABIgFAAIgIACIgEACIgBAEQAAADACACQACACAEAAQADAAACgCQAEgBACgEIACgJg");
	this.shape_30.setTransform(-48.875,-23.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAbQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIABgGIAEgXIgFAAIABgGIAGAAIACgKIAHgEIgDAOIAGAAIgBAGIgHAAIgDAWIgBAFIABACIABAAIAEAAIgBAGIgEABQgEAAgDgCg");
	this.shape_31.setTransform(-54.05,-24.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgLAUQgDgCgCgEQgDgEAAgFQABgLAGgIQAHgHAIAAQAHAAAFAFQAFAFAAAIQAAAGgDAGQgDAGgGADQgEAEgGAAQgEAAgFgCgAgDgOQgCACgCADQgDADgBAEIgBAGQAAAGADADQADADAEAAIAEgBIAEgCIAEgFIACgFIABgGQgBgGgCgDQgDgDgEAAQgDAAgDABg");
	this.shape_32.setTransform(-57.6,-23.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAJAdIgNggIgGgQIgDAOIgHAiIgHAAIAMg5IAHAAIAJAWIAHAQIADAKIADgPIAHghIAHAAIgMA5g");
	this.shape_33.setTransform(-62.475,-24.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.disc, new cjs.Rectangle(-135,-31,272.1,13), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,320,50), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,320,50), null);


(lib.dota = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(732));

	// Layer_1
	this.instance = new lib.dotsamn();
	this.instance.setTransform(166.2,166.2,1,1,0,0,0,166.2,166.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},960).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-68.9,470.4,470.4);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,42,108,191,268];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
		
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 400);
	}
	this.frame_42 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1200);
	}
	this.frame_108 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1200);
	}
	this.frame_191 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1200);
	}
	this.frame_268 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(66).call(this.frame_108).wait(83).call(this.frame_191).wait(77).call(this.frame_268).wait(306));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(160,24.95,0.4396,0.5555,0,0,0,364,44.9);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).to({_off:true},330).wait(244));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A4/j5MAx/AAAIAAHzMgx/AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},330).wait(244));

	// logo_large
	this.instance = new lib.logo_large_1();
	this.instance.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({_off:false},0).to({alpha:1},33,cjs.Ease.cubicOut).to({_off:true},63).wait(243));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(218).to({alpha:0},33,cjs.Ease.cubicOut).to({_off:true},79).wait(244));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(283,36,0.3571,0.3571,0,0,0,282.9,36);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(218).to({_off:false},0).to({regX:283,scaleX:1,scaleY:1,alpha:1},50,cjs.Ease.elasticOut).to({_off:true},62).wait(244));

	// no
	this.instance_3 = new lib.no_1();
	this.instance_3.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(132).to({_off:false},0).to({alpha:1},45,cjs.Ease.cubicOut).wait(25).to({alpha:0},33,cjs.Ease.cubicOut).to({_off:true},95).wait(244));

	// disclaimer
	this.instance_4 = new lib.disc();
	this.instance_4.setTransform(244,75.2,1,1,0,0,0,136.1,9.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(132).to({_off:false},0).to({alpha:1},29).wait(41).to({alpha:0},33,cjs.Ease.cubicOut).to({_off:true},94).wait(245));

	// head42
	this.instance_5 = new lib.head42_1();
	this.instance_5.setTransform(80,210,1,1,0,0,0,80,300);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(202).to({_off:false},0).to({y:300},30,cjs.Ease.cubicInOut).to({_off:true},98).wait(244));

	// head41
	this.instance_6 = new lib.head41_1();
	this.instance_6.setTransform(80,210,1,1,0,0,0,80,300);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(204).to({_off:false},0).to({y:300},30,cjs.Ease.cubicInOut).to({_off:true},96).wait(244));

	// head31
	this.instance_7 = new lib.head31_1();
	this.instance_7.setTransform(80,250,1,1,0,0,0,80,300);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125).to({_off:false},0).to({y:300},30,cjs.Ease.cubicInOut).wait(39).to({y:350},29,cjs.Ease.backIn).to({_off:true},107).wait(244));

	// image2
	this.instance_8 = new lib.image2_1();
	this.instance_8.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(132).to({_off:false},0).to({alpha:1},45,cjs.Ease.cubicOut).wait(25).to({alpha:0},33,cjs.Ease.cubicOut).to({_off:true},95).wait(244));

	// image1
	this.instance_9 = new lib.image1_1();
	this.instance_9.setTransform(80,300,1,1,0,0,0,80,300);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({alpha:1},33,cjs.Ease.cubicOut).wait(70).to({alpha:0},26,cjs.Ease.cubicOut).to({_off:true},1).wait(385));

	// DOTS
	this.instance_10 = new lib.dota();
	this.instance_10.setTransform(242.2,24.05,0.2764,0.2764,0,0,0,166.8,166.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({alpha:1},33,cjs.Ease.cubicOut).wait(57).to({alpha:0},39,cjs.Ease.cubicOut).to({_off:true},1).wait(385));

	// head21
	this.instance_11 = new lib.head21_1();
	this.instance_11.setTransform(80,250,1,1,0,0,0,80,300);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},0).to({y:300},30,cjs.Ease.cubicInOut).wait(28).to({y:350},29,cjs.Ease.backIn).to({_off:true},188).wait(244));

	// head11
	this.instance_12 = new lib.head11_1();
	this.instance_12.setTransform(80,249,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({y:300},30,cjs.Ease.cubicInOut).wait(17).to({y:350},29,cjs.Ease.backIn).to({_off:true},254).wait(244));

	// hand
	this.instance_13 = new lib.hand_1();
	this.instance_13.setTransform(24.1,485.2,1.4865,1.4865,0,0,0,80,300.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:300,scaleX:1,scaleY:1,x:80,y:300},30,cjs.Ease.quartOut).wait(27).to({x:119,y:340},29,cjs.Ease.cubicOut).to({_off:true},244).wait(244));

	// product
	this.instance_14 = new lib.product_1();
	this.instance_14.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(18).to({regX:80.1,regY:300.2,scaleX:0.8503,scaleY:0.8503,x:109.15,y:257.2},6,cjs.Ease.cubicOut).to({regX:80,regY:300,scaleX:1,scaleY:1,x:80,y:300},6,cjs.Ease.cubicOut).wait(27).to({alpha:0},29,cjs.Ease.cubicOut).to({_off:true},244).wait(244));

	// back
	this.instance_15 = new lib.back_1();
	this.instance_15.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},330).wait(244));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,-65,380.9,178.4);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 320,
	height: 50,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.png?1690212591018", id:"back"},
		{src:"images/cta.png?1690212591018", id:"cta"},
		{src:"images/dots.png?1690212591018", id:"dots"},
		{src:"images/hand.png?1690212591018", id:"hand"},
		{src:"images/head11.png?1690212591018", id:"head11"},
		{src:"images/head21.png?1690212591018", id:"head21"},
		{src:"images/head31.png?1690212591018", id:"head31"},
		{src:"images/head41.png?1690212591018", id:"head41"},
		{src:"images/head42.png?1690212591018", id:"head42"},
		{src:"images/image1.png?1690212591018", id:"image1"},
		{src:"images/image2.png?1690212591018", id:"image2"},
		{src:"images/logo.png?1690212591018", id:"logo"},
		{src:"images/logo_large.png?1690212591018", id:"logo_large"},
		{src:"images/no.png?1690212591018", id:"no"},
		{src:"images/product.png?1690212591018", id:"product"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;