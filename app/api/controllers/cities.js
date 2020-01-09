const cityModel = require('../models/cities');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  cityModel.findById(req.params.cityId, function(err, cityInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "City found!!!", data:{cities: cityInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let citiesList = [];
cityModel.find({}, function(err, cities){
   if (err){
    next(err);
   } else{
    for (let city of cities) {
     citiesList.push({id: city._id, name: city.name, start_on: city.start_on});
    }
    res.json({status:"success", message: "Movies list found!!!", data:{cities: citiesList}});
       
   }
});
 },
updateById: function(req, res, next) {
  cityModel.findByIdAndUpdate(req.params.cityId,{name:req.body.name}, function(err, cityInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "City updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  cityModel.findByIdAndRemove(req.params.cityId, function(err, cityInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "City deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  cityModel.create({ name: req.body.name, start_on: req.body.start_on }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "City added successfully!!!", data: null});
      
    });
 },
}
