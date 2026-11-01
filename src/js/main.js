import { getById } from "./getById";
import { renderModal } from "./modal";

getById("1A9Zk3dGkdpT2sm").then(d=>renderModal(d))