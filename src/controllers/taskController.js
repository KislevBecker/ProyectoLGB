import Task from "../models/Task";


export const renderTasks = async (req, res) => {
      try {
        const tasks = await Task.find().lean(); // Utiliza lean() para obtener objetos JavaScript simples
        res.render('tasks', { tasks }); // Pasa los datos a la vista Handlebars
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener las tareas');
    }
};

export const guardarTasks= async (req, res) => {
    const {cuadrilla, empleado, sitio, rda, inputsData} = req.body;
  
    try {
      const newTask = new Task({
        cuadrilla,
        empleado,
        sitio,
        rda,
        producto: inputsData // Guarda el arreglo de objetos inputsData en el campo producto
    });
  
       // Guardar el nuevo documento en la base de datos
       const savedTask = await newTask.save();
       //res.status(201).json(savedTask);
      // await task.save();
      res.redirect("/");
    } catch (error) {
      console.error('No se pudo guardar en la base de datos: ', error);
      res.status(500).send('Error interno del servidor');
    }
};