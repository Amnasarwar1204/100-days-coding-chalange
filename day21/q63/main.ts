
// Creating a custom type (type alias) for shapes that could be circles or rectangles
type shape = {
   kind: "circle" | "rectangl",
   radius?: number,
   width?: number,
   height?: number
}

// Describing a circle using our Shape type   
let circle: shape = {
    kind: "circle",
    radius: 5,
}

// Describing a rectangle using our Shape type
let rectangle : shape={
    kind: "rectangl",
    width: 10,
    height: 10,
    
}

// Showing what we described
console.log(circle);// Here's the circle
console.log(rectangle);// And here's the rectangle
// We made a flexible program that can describe different shapes in detail


