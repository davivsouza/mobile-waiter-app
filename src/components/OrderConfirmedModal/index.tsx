import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import {Container, OkButton} from './styles';
interface OrderConfirmedModalProps {
  visible: boolean
  onOk: () => void;
}
export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style="light" />
      <Container>
        <CheckCircle />
        <Text color="#fff" size={20} weight="600" style={{marginTop: 12}}>Pedido Confirmado</Text>
        <Text color="#fff" opacity={0.9} style={{marginTop: 4}}>O pedido já entrou na fila de produção!</Text>
        <OkButton onPress={onOk}>
          <Text color="#d73035" weight="600">OK</Text>
        </OkButton>
      </Container>

    </Modal>
  );
}
