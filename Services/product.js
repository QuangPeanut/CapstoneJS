function ProducutApi() {
  this.fetchUser = async function (type) {
    try {
      const res = await axios({
        url: `https://637b69996f4024eac20ce11d.mockapi.io/api/SanPham`,
        method: "GET",
      });
      if (type === "all") {
        return res.data;
      } else {
        let dataType = [];
        for (let i = 0; i < res.data.length; i++) {
          if (type === res.data[i].type) {
            console.log(res.data[i].type);
            dataType.push(res.data[i]);
          }
        }
        // console.log(dataType);
        return dataType;
      }
    } catch (error) {}
  };
}
