const { firestore } = require('firebase-admin')

exports.makeid = async (length, tableName) => {
  var id = '';
  while (true) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    const res = await firestore().collection(tableName).doc(id).get();
    if (!res.exists) {
      return id;
    }
  }
}