import React, { Component } from 'react'

import ContentHeader from './../common/template/contentheader'
import Content from './../common/template/content'
import TabContent from './../common/tab/tabContent'

import Tabs from './../common/tab/tabs'
import TabsHeader from './../common/tab/tabsHeader'
import TabsContent from './../common/tab/tabsContent'
import TabHeader from './../common/tab/tabHeader'

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'  icon='bars'    target='tabList' />
                            <TabHeader label='Incluir' icon='plus'    target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil'  target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'><h1>Listar</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Criar</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Deletar</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle