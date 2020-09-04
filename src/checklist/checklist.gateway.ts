import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';

@WebSocketGateway();
export class ChecklistGateway implements OnGatewayConnection, OnGatewayDisconnect{

}