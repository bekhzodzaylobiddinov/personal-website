export default function Canvas({ width, height }) {
  return (
    <canvas
      className="!absolute !left-0 !-z-10 bg-[#1D1D1D]"
      id="canvas"
      width={width}
      height={height}
    ></canvas>
  );
}
