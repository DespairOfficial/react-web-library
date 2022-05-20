import React from 'react'
import styles from './Table.module.css'
const Table = (props) => {
    const data = props.data
    return (
        <div className={styles.usersTable}>
            <ul>
                <li className={styles.firstRow + ' ' + styles.tableLi}>
                    {data.length
                        ? Object.keys(data[0]).map((propertyName, i) => {
                              return (
                                  <div
                                      key={'propertyName' + i}
                                      className={styles.item}
                                  >
                                      {propertyName}
                                  </div>
                              )
                          })
                        : null}
                </li>
                {data.length
                    ? data.map((item, i) => {
                          return (
                              <li key={'item' + i} className={styles.tableLi}>
                                  {Object.keys(item).map((property, j) => {
                                      return (
                                          <div
                                              className={styles.item}
                                              key={'property' + j}
                                          >
                                              {item[property]}
                                          </div>
                                      )
                                  })}
                              </li>
                          )
                      })
                    : null}
            </ul>
        </div>
    )
}
export default Table
