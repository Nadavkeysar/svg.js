describe('Polyline', function() {
  var polyline
  
  beforeEach(function() {
    polyline = draw.polyline('0,0 100,0 100,100 0,100')
  })
  
  afterEach(function() {
    draw.clear()
  })
  
  describe('x()', function() {
    it('should return the value of x without an argument', function() {
      expect(polyline.x()).toBe(0)
    })
    it('should set the value of x with the first argument', function() {
      polyline.x(123)
      var box = polyline.bbox()
      expect(box.x).toBe(123)
    })
  })
  
  describe('y()', function() {
    it('should return the value of y without an argument', function() {
      expect(polyline.y()).toBe(0)
    })
    it('should set the value of y with the first argument', function() {
      polyline.y(345)
      var box = polyline.bbox()
      expect(box.y).toBe(345)
    })
  })
  
  describe('cx()', function() {
    it('should return the value of cx without an argument', function() {
      expect(polyline.cx()).toBe(50)
    })
    it('should set the value of cx with the first argument', function() {
      polyline.cx(123)
      var box = polyline.bbox()
      expect(box.cx).toBe(123)
    })
  })
  
  describe('cy()', function() {
    it('should return the value of cy without an argument', function() {
      expect(polyline.cy()).toBe(50)
    })
    it('should set the value of cy with the first argument', function() {
      polyline.cy(345)
      var box = polyline.bbox()
      expect(box.cy).toBe(345)
    })
  })
  
  describe('move()', function() {
    it('should set the x and y position', function() {
      polyline.move(123,456)
      var box = polyline.bbox()
      expect(box.x).toBe(123)
      expect(box.y).toBe(456)
    })
  })
  
  describe('center()', function() {
    it('should set the cx and cy position', function() {
      polyline.center(321,567)
      var box = polyline.bbox()
      expect(box.x).toBe(271)
      expect(box.y).toBe(517)
    })
  })

  describe('width()', function() {
    it('sets the width and height of the element', function() {
      polyline.width(987)
      var box = polyline.bbox()
      expect(approximately(box.width, 0.1)).toBe(987)
    })
    it('gets the width and height of the element without an argument', function() {
      polyline.width(789)
      expect(approximately(polyline.width(), 0.1)).toBe(789)
    })
  })

  describe('height()', function() {
    it('sets the height and height of the element', function() {
      polyline.height(987)
      var box = polyline.bbox()
      expect(approximately(box.height, 0.1)).toBe(987)
    })
    it('gets the height and height of the element without an argument', function() {
      polyline.height(789)
      expect(approximately(polyline.height(), 0.1)).toBe(789)
    })
  })
  
  describe('size()', function() {
    it('should define the width and height of the element', function() {
      polyline.size(987,654)
      var box = polyline.bbox()
      expect(approximately(box.width, 0.1)).toBe(987)
      expect(approximately(box.height, 0.1)).toBe(654)
    })
  })
  
  describe('scale()', function() {
    it('should scale the element universally with one argument', function() {
      var box1 = polyline.bbox()
        , box2 = polyline.scale(2).bbox()
      
      expect(box2.width).toBe(box1.width * 2)
      expect(box2.height).toBe(box1.height * 2)
    })
    it('should scale the element over individual x and y axes with two arguments', function() {
      var box1 = polyline.bbox()
        , box2 = polyline.scale(2, 3.5).bbox()
      
      expect(box2.width).toBe(box1.width * 2)
      expect(box2.height).toBe(box1.height * 3.5)
    })
  })

  describe('translate()', function() {
    it('should set the translation of an element', function() {
      polyline.transform({ x: 12, y: 12 })
      expect(polyline.node.getAttribute('transform')).toBe('translate(12 12)')
    })
  })
  
})








