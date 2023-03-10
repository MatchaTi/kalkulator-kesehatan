const Tidur = (jam, menit) => {
  const data = {
    waktu1: { jamWaktu: '00:00', siklus: 6 },
    waktu2: { jamWaktu: '00:00', siklus: 5 },
    waktu3: { jamWaktu: '00:00', siklus: 4 },
    waktu4: { jamWaktu: '00:00', siklus: 3 },
  };

  let waktu = jam - 9;

  if (waktu < 0) {
    waktu = 24 + waktu;
  }
  data.waktu1.jamWaktu = waktu < 10 ? `0${waktu}:${menit}` : `${waktu}:${menit}`;
  data.waktu2.jamWaktu = kurangWaktu(data.waktu1.jamWaktu, menit);
  data.waktu3.jamWaktu = kurangWaktu(data.waktu2.jamWaktu, data.waktu2.jamWaktu.split(':')[1]);
  data.waktu4.jamWaktu = kurangWaktu(data.waktu3.jamWaktu, data.waktu3.jamWaktu.split(':')[1]);

  const dataWaktu = Object.keys(data).map((key) => data[key]);

  return dataWaktu;
};

const kurangWaktu = (waktu, menit) => {
  let jam = parseInt(waktu.split(':')[0]);
  let result = '00:00';
  jam = jam + 1;
  if (jam > 24) {
    jam = jam - 24;
  }

  menit = parseInt(menit) + 30;

  if (menit >= 60) {
    menit = menit - 60;
    jam++;
    if (menit == 60) {
      menit = 0;
      jam++;
    }
  }
  if (jam == 24) {
    jam = 0;
  }

  if (jam < 10) {
    result = menit < 10 ? `0${jam}:0${menit}` : `0${jam}:${menit}`;
  } else {
    result = menit < 10 ? `${jam}:0${menit}` : `${jam}:${menit}`;
  }

  return result;
};

export default Tidur;
