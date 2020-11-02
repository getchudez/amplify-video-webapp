import './WebPlayer.css';
import 'video.js';

function WebPlayer() {
  return (
    <div>

        <video
            id="player-example"
            className="video-js"
            controls
            preload="auto"
            data-setup='{}'>

            <source src="https://d17rmzbxgxru50.cloudfront.net/MP4_MP4.mp4?Expires=1604374648&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMTdybXpieGd4cnU1MC5jbG91ZGZyb250Lm5ldC9NUDRfTVA0Lm1wNCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTYwNDM3NDY0OH19fV19&Signature=gfv4OKcAUgNnwwSOpzzXML8oY5k4xI~h2C-9ZabTkhlXO45ecciOi0r4DbTUi4LRQQ6xlEgE3VvEJUTsJ8aseve-9oIYUF5SwnxoUMfTSWAGKqCWUAGRHD0wzUQANEALbqtD07rIPYYyp-XDQri8~TcBkyiJCoK9m9I8K~gMGAzfctgWKVsYOXlfjg-2KQ1MG3Q1Bm57JfyyaoB~HoKfKxRyVZ3sPFwb3Y-poWG0AfEGSdJcKxP3U9kLppPOJMrAr-7WXq6U4I92k8ksKuZJk-Uew94OocIoxHRR~fZYRQg1crOG1iKlFWY-ffdAYe27p0jWvw2K~Y3OY398mkzhVA__&Key-Pair-Id=K210FBQU0W4R88" type="video/mp4"></source>
            <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a  web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                </a>
            </p>
        </video>

    </div>
  );
}

export default WebPlayer;
