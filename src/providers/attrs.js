const server = "http://192.168.0.99:3000";
const live_camera_server = "http://localhost:5514/live";
const camera_server = "http://localhost:5513/";

export default {
  title: "SIM TNI-AD",
  url: {
    server: server,
    liveViewServer: live_camera_server,
    capturedServer: camera_server + "liveview.jpg"
  },
  storage: "sim_tni_ad"
};
