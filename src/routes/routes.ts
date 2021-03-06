import { Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Cliente } from "../classes/personal/cliente";
import { Empleado } from "../classes/personal/empleado";
import { Producto } from "../classes/producto/producto";
import { Dispositivo } from "../classes/producto/dispositivo";
import { Liquido } from "../classes/producto/liquido";
import { tCliente, ClienteDB } from "../schemas/cliente";
import { tEmpleado, EmpleadoDB, tEmpleado2, tSalario } from "../schemas/empleado";
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
  private getEmpleados = async (req: Request, res: Response) => {
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
  private getClientes = async (req: Request, res: Response) => {
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

  // Listar dispositivos
  private getDispositivos = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const valor = req.params.id
        console.log(mensaje)
        const query = await DispositivoDB.find();
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    db.desconectarBD()
  }

  // Listar liquidos
  private getLiquidos = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const valor = req.params.id
        console.log(mensaje)
        const query = await LiquidoDB.find();
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    db.desconectarBD()
  }

  // A??adir empleado
  private addEmpleado = async (req: Request, res: Response) => {
    const { id, nombre, calle, numero, telefono, email, ventas, horas } = req.body
    await db.conectarBD()
    const dSchema = {
      _id: id,
      _nombre: nombre,
      _direccion: { calle: calle, numero: numero },
      _telefono: telefono,
      _email: email,
      _ventas: ventas,
      _horas: horas
    }
    const oSchema = new EmpleadoDB(dSchema)
    await oSchema.save()
      .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
      .catch((err: any) => res.send('Error: ' + err))

    db.desconectarBD()
  }

  // A??adir cliente
  private addCliente = async (req: Request, res: Response) => {
    const { id, nombre, calle, numero, telefono, email, socio } = req.body
    await db.conectarBD()
    const dSchema = {
      _id: id,
      _nombre: nombre,
      _direccion: { calle: calle, numero: numero },
      _telefono: telefono,
      _email: email,
      _socio: socio
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
    const { nombre, calle, numero, telefono, email, ventas, horas } = req.body
    await EmpleadoDB.findOneAndUpdate(
      { _id: id },
      {
        _id: id,
        _nombre: nombre,
        _direccion: { calle: calle, numero: numero },
        _telefono: telefono,
        _email: email,
        _ventas: ventas,
        _horas: horas
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
        _direccion: { calle: calle, numero: numero },
        _telefono: telefono,
        _email: email,
        _socio: socio,
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

  // Buscar empleado
  private getEmpleadoId = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const id = req.params.id
        console.log(mensaje)
        const query = await EmpleadoDB.findOne({ _id: id });
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    await db.desconectarBD()
  }

  // Buscar cliente
  private getClienteId = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const id = req.params.id
        console.log(mensaje)
        const query = await ClienteDB.findOne({ _id: id });
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    await db.desconectarBD()
  }

  // Buscar dispositivo
  private getDispositivoId = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const id = req.params.id
        console.log(mensaje)
        const query = await DispositivoDB.findOne({ _id: id });
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    await db.desconectarBD()
  }

  // Buscar liquido
  private getLiquidoId = async (req: Request, res: Response) => {
    await db.conectarBD()
      .then(async (mensaje) => {
        const id = req.params.id
        console.log(mensaje)
        const query = await LiquidoDB.findOne({ _id: id });
        res.json(query)
      })
      .catch((mensaje) => {
        res.send(mensaje)
      })
    await db.desconectarBD()
  }

  // Add compra
  private addCompra = async (req: Request, res: Response) => {
    const { id, idCliente, idProducto, coste } = req.body
    let fecha: Date = new Date()
    await db.conectarBD()
    const dSchema = {
      _id: id,
      _idCliente: idCliente,
      _idProducto: idProducto,
      _coste: coste,
      _fecha: fecha
    }
    const oSchema = new CompraDB(dSchema)
    await oSchema.save()
      .then((doc: any) => res.send('Has guardado el archivo:\n' + doc))
      .catch((err: any) => res.send('Error: ' + err))

    db.desconectarBD()
  }

  // Calcular salario
  private getSalario = async (req: Request, res: Response) => {
    let tmpEmpleado: Empleado
    let dEmpleado: tEmpleado2
    let arraySalario: Array<tSalario> = []
    console.log('hola');
    
      await db.conectarBD()
        .then(async (mensaje) => {
          console.log(mensaje)
          const query = await EmpleadoDB.find({});
          for (dEmpleado of query) {
            tmpEmpleado = new Empleado(
              dEmpleado._id,
              dEmpleado._nombre,
              dEmpleado._direccion,
              dEmpleado._telefono,
              dEmpleado._email,
              dEmpleado._ventas,
              dEmpleado._horas)

            let salario = tmpEmpleado.salario()
            
            let oSalario: tSalario = {
              _id: null,
              _nombre: null,
              _salario: null
            }
            oSalario._id = tmpEmpleado.id
            oSalario._nombre = tmpEmpleado.nombre
            oSalario._salario = salario
            arraySalario.push(oSalario)
          }
          
          res.json(arraySalario)
        })
        .catch((mensaje) => {
          res.send(mensaje)
        })
    await db.desconectarBD()
  }

  // RUTAS
  misRutas() {
    // Listar
    this._router.get('/empleados/salario', this.getSalario)
    this._router.get('/empleados', this.getEmpleados)
    this._router.get('/clientes', this.getClientes)
    this._router.get('/empleados/:id', this.getEmpleadoId)
    this._router.get('/clientes/:id', this.getClienteId)
    this._router.get('/dispositivos', this.getDispositivos)
    this._router.get('/liquidos', this.getLiquidos)
    this._router.get('/dispositivos/:id', this.getDispositivoId)
    this._router.get('/liquidos/:id', this.getLiquidoId)
    // Crear
    this._router.post('/empleados/addEmpleado', this.addEmpleado)
    this._router.post('/clientes/addCliente', this.addCliente)
    this._router.post('/addCompra', this.addCompra)
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