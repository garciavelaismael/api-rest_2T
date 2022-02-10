import { Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Cliente } from "../classes/personal/cliente";
import { Empleado } from "../classes/personal/empleado";
import { Producto } from "../classes/producto/producto";
import { Dispositivo } from "../classes/producto/dispositivo";
import { Liquido } from "../classes/producto/liquido";
import { tCliente, ClienteDB } from "../schemas/cliente";
import { tEmpleado, EmpleadoDB } from "../schemas/empleado";
import { tLiquido, LiquidoDB } from "../schemas/liquido";
import { tDispositivo, DispositivoDB } from "../schemas/dispositivo";
import { tCompra, CompraDB } from "../schemas/compras";
import { Mongoose } from 'mongoose';

class Routes {
  private _router: Router

  constructor() {
    this._router = Router()
  }
  get router() {
    return this._router
  }

  // Listar empleados
  private listEmpleados = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const valor = req.params.id
        console.log(mensaje)
        const query = await EmpleadoDB.find();
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    db.desconectarBD()
  }

  // Listar clientes
  private listClientes = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const valor = req.params.id
        console.log(mensaje)
        const query = await ClienteDB.find();
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    db.desconectarBD()
  }

  // Añadir empleado
  private addEmpleado = async (req: Request, res: Response) => {
    const { id, nombre, calle, numero, telefono, email, puesto } = req.body
    await db.conectarBD()
    const dSchema = {
      _id: id,
      _nombre: nombre,
      _direccion: { calle: calle, numero: numero},
      _telefono: telefono,
      _email: email,
      _puesto: puesto,
    }
    const oSchema = new EmpleadoDB(dSchema)
    await oSchema.save()
      .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
      .catch((err: any) => res.send('Error: ' + err))

    db.desconectarBD()
  }

  // Añadir cliente
  private addCliente = async (req: Request, res: Response) => {
    const { id, nombre, calle, numero, telefono, email, socio } = req.body
    await db.conectarBD()
    const dSchema = {
      _id: id,
      _nombre: nombre,
      _direccion: { calle: calle, numero: numero},
      _telefono: telefono,
      _email: email,
      _socio: socio,
      _carrito: [],
    }
    const oSchema = new ClienteDB(dSchema)
    await oSchema.save()
      .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
      .catch((err: any) => res.send('Error: ' + err))

    db.desconectarBD()
  }

  // Actualizar empleado
  private updateEmpleado = async (req: Request, res: Response) => {
    await db.conectarBD()
    const id = req.params.id
    const { nombre, calle, numero, telefono, email, puesto } = req.body
    await EmpleadoDB.findOneAndUpdate(
        { _id: id },
        {
          _id: id,
          _nombre: nombre,
          _direccion: { calle: calle, numero: numero},
          _telefono: telefono,
          _email: email,
          _puesto: puesto,
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
        .catch((err: any) => res.send('Error: ' + err))

    await db.desconectarBD()
}

  // Actualizar cliente
  private updateCliente = async (req: Request, res: Response) => {
    await db.conectarBD()
    const id = req.params.id
    const { nombre, calle, numero, telefono, email, socio } = req.body
    await ClienteDB.findOneAndUpdate(
        { _id: id },
        {
          _id: id,
          _nombre: nombre,
          _direccion: { calle: calle, numero: numero},
          _telefono: telefono,
          _email: email,
          _socio: socio,
          _carrito: [],
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
        .catch((err: any) => res.send('Error: ' + err))

    await db.desconectarBD()
}

  // Eliminar empleado
  private delEmpleado = async (req: Request, res: Response) => {
    await db.conectarBD()

    const id = req.params.id
    await EmpleadoDB.findOneAndDelete({ _id: id })
    .then((doc: any) => res.send('Eliminado correctamente.'))
    .catch((err: any) => res.send('Error: ' + err))

    await db.desconectarBD()
}

  // Eliminar cliente
  private delCliente = async (req: Request, res: Response) => {
    await db.conectarBD()

    const id = req.params.id
    await ClienteDB.findOneAndDelete({ _id: id })
    .then((doc: any) => res.send('Eliminado correctamente.'))
    .catch((err: any) => res.send('Error: ' + err))

    await db.desconectarBD()
}

// RUTAS
  misRutas() {
    // Listar
    this._router.get('/empleados', this.listEmpleados)
    this._router.get('/clientes', this.listClientes)
    // Crear
    this._router.post('/empleados/addEmpleado', this.addEmpleado)
    this._router.post('/clientes/addCliente', this.addCliente)
    // Actualizar
    this._router.put('/empleados/update/:id', this.updateEmpleado)
    this._router.put('/clientes/update/:id', this.updateCliente)
    // Eliminar
    this._router.delete('/empleados/delete/:id', this.delEmpleado)
    this._router.delete('/clientes/delete/:id', this.delCliente)
  }
}

const obj = new Routes()
obj.misRutas()
export const routes = obj.router