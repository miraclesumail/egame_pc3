import React, { ChangeEvent, useState } from 'react'
import { useSetState } from 'ahooks'
import Dialog from '@/components/Dialog'
import Input from '@/components/input'
import Icon from "@/components/Icon";
import styled from 'styled-components';
import { Row } from '@/components/flex';

interface State {
  areaCode: string;
  phone: string;
  amount: string;
}

const Notice = styled(Row)`
  padding-top: 24px;
  font-weight: 400;
  font-size: 12px;
  color: #CB5460;
`
const Index = () => {
  const [{ areaCode, phone, amount }, setState] = useSetState<State>({
    areaCode: '',
    phone: '',
    amount: ''
  })

  return (
    <Dialog
      visible={true}
      title={'申请专属服务'}
      buttons={[
        {
          action: () => console.log('dsfsd')
        },
        {
          action: () => null
        }
      ]}
      small
    >
      <Input
        {...{
          placeholder: '区码',
          errorMsg: '输入有效区码',
          id: `${Date.now()}_code`,
          value: areaCode,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            if (/^[0-9]*$/.test(e.target.value)) {
              setState({ areaCode: e.target.value })
            }
          }
        }}
      />

      <Input
        {...{
          placeholder: '电话号码',
          errorMsg: '输入电话号码',
          value: phone,
          id: `${Date.now()}_phone`,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            if (/^[0-9]*$/.test(e.target.value)) {
              setState({ phone: e.target.value })
            }
          }
        }}
      />

      {/* <Input
        {...{
          placeholder: '出码额',
          errorMsg: '输入出码额',
          value: amount,
          id: `${Date.now()}_amount`,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            if (/^[0-9]*$/.test(e.target.value)) {
              setState({ amount: e.target.value })
            }
          }
        }}
      /> */}
       <Notice>
          <Icon type="icon-alert-circle" color="#CB5460"></Icon>
          <span>
        请先确认您的联系电话<br/>
        我们将在您申请专属服务后，尽快与您联系。
        </span>
        </Notice>
    </Dialog>
  )
}

export default Index
