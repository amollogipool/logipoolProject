var mysqlQuery = require('../../config');
/**
 * This function represent User Login using email and password
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */

/**
 * This function represent to insert record to Employee master
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */

function addNewEmployee(req,res){
    var param = req.body;
    var query="INSERT INTO `employee` (`name`, `email`, `contact`, `gender`, `dob`, `designation`, `salary`, `address`,`status`) VALUES ('" + param.name + "','" + param.email + "','" + param.contact + "','" + param.gender + "','" + param.dob +"','" + param.designation + "','" + param.salary + "','" + param.address + "',1)";
    mysqlQuery.excecuteQuery(query, function(error, result){
        if(error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                error: false,
                message: "Record Inserted Successfully"
            });
        }
    });
}

/**
 * This function represent to select all record from Employee Master table
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function getAllEmployee(req, res) {
    var query="SELECT `id`, `name`, `email`, `contact`, `gender`, `dob`, `designation`, `salary`, `address` FROM `employee` where status = 1 ORDER by id DESC"
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                error: false,
                result: result
            })
        }
           
    });
}

/**
 * This function represent select record from Employee Master table for edit
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function getEmployeeById(req, res) {
    var id = req.params.id;
    var query = "SELECT * FROM employee where id=" + id;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            });
        }else{
            return res.json({
                result: result[0]
            });
        }
            
    })
}

/**
 * This function represent to update the Empoyee Master
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function updateEmployeeById(req, res) {
    var param = req.body;
    var query = "UPDATE employee SET `name`= '" + param.name + "',`email`= '" + param.email + "',`contact`= '" + param.contact + "',`gender`= '" + param.gender + "', `dob`= '" + param.dob + "',`designation`= '" + param.designation + "',`salary`='"+ param.salary + "', `address`= '" + param.address + "' WHERE id =" + param.id;
    mysqlQuery.excecuteQuery(query, function (error, result) { 
        if (!error){
            return res.json({
                error: false,
                message: "Employee Updated Successfully"
            });
        }else{
            return res.json({
                error: true,
                message: error
            })
           
        }
           
    })

}

/**
 * This function represent to delete record from Employee Master table
 * @param {*} req 
 * @param {*} res 
 * @author Amol Dhamale
 */
function DeleteEmployeeById(req, res) {
    var param = req.body;
    var query = "UPDATE `employee` SET `status` = 0 WHERE id=" + param.id;
    mysqlQuery.excecuteQuery(query, function (error, result) {
        if (error){
            return res.json({
                error: true,
                message: error
            })
        }else{
            return res.json({
                result: result
            })
        }
    })
}

module.exports = {
    // login: login,
    addNewEmployee: addNewEmployee,
    getAllEmployee: getAllEmployee,
    getEmployeeById: getEmployeeById,
    updateEmployeeById: updateEmployeeById,
    DeleteEmployeeById: DeleteEmployeeById
}

