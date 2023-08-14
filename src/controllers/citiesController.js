const getCities = (req,res) => {
    res.json({
        cities: [
          {
            name: "Buenos Aires",
            country: "Argentina",
          },
        ],
      });
}

module.exports = { getCities }