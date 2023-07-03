import React from 'react'
import { BtnClear,ContainerFilter, Form, InputFilter, QuantityItems, IconCart, handleClick } from './FiltersStyle'
import { Button } from '../ProductCard/ProductCardStyle';


function Filters({
  minFilter,
  setMinFilter,
  maxFilter,
  setMaxFilter,
  searchFilter,
  handleSearchFilterChanges,
  handleMinFilterChanges,
  handleMaxFilterChanges,
  ClearFilters,  
}) 
{
  
  return (
    <ContainerFilter>
        <Form> <h1>Filtro</h1>
                <InputFilter
                    type="text"
                    id="inputSearchFilter"
                    placeholder="Buscar por nome"
                    onChange={(event) => {
                        handleSearchFilterChanges(event);
                    }}
                    value={searchFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMinFilter"
                    placeholder="Valor Mínimo"
                    onChange={(event) => {
                        handleMinFilterChanges(event);
                    }}
                    value={minFilter}
                />
                <InputFilter
                    type="number"
                    id="inputMaxFilter"
                    placeholder="Valor Máximo"
                    onChange={(event) => {
                        handleMaxFilterChanges(event);
                    }}
                    value={maxFilter}
                />
                <BtnClear onClick={(event) => ClearFilters(event)}>Limpar</BtnClear>
          </Form>

    </ContainerFilter>
  )
}

export default Filters