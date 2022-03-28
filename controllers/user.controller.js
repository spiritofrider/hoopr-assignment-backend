exports.allAccess = (req, res) => {
    res.status(200).send({message:'This is accessible without authorization.'});
  };
  exports.userBoard = (req, res) => {
    res.status(200).send({message:'This is the page for authorized users.'});
  };