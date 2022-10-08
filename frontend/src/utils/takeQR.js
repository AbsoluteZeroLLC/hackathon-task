import { QRreader } from 'react-native-qr-decode-image-camera';
import { stopLoading } from './loader';
const { launchCamera } = require('react-native-image-picker');

const takeQR = async () => {
  const res = await new Promise((resolve, reject) => {
    launchCamera(
      {
        cameraType: 'back',
      },
      response => {
        if (!response?.assets?.[0]?.uri) {
          reject('No image selected');
          return;
        }
        try {
          QRreader(response.assets[0].uri).then(data => {
            resolve(data);
          });
        } catch (er) {
          stopLoading();
        }
      },
    );
  });
  stopLoading();
  return res;
};

export default takeQR;
