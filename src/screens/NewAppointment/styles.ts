import styled from '@emotion/native'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.padding.lg};
  gap: 24px;
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
`;

