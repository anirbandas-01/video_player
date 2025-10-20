import { useParams } from "react-router-dom";

export default function Watch() {
  const { videoId } = useParams();
  return <h2>Now Watching Video ID: {videoId}</h2>;
}
