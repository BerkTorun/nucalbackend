
const { Task } = require('../models/task');

const project_get_all = (req, res) => {
    Task.find().sort({ createdAt: -1 })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(`There is an error in the server while loading projects`);
        });
}

const project_get_byID = (req, res) => {
    const id = req.params.id;
    Task.findById(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const project_create = (req, res) => {
    const project = new Task(req.body);
    project.save()
        .then(result => {
            res.status(201).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

const project_delete = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(400).send(err);
        });
}

module.exports = {
    project_get_all,
    project_get_byID,
    project_create,
    project_delete
}