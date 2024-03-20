
const SocketController =  (socket) => {
    console.log('Cliente conectado' ,socket.id);
    
    socket.on('disconnect', () => {
      console.log('Cliente desconectado', socket.id);

   });

      //listener , que funciona para usar socket.emit de socket client 'enviar-mensaje', 
      // el callback hace referencia al tercer argumento de socket.emit (id)
      socket.on('enviar-mensaje', (payload, callback) => {
     
       const id = 123226222;
       callback(id);
                  
       //callback con fecha funciona para grabar en base de datos
       // callback({id,fecha: new Date().getTime()});

     socket.broadcast.emit('enviar-mensaje', payload)          
      // console.log(payload);
   })
       

    
}



module.exports = {
    SocketController
}