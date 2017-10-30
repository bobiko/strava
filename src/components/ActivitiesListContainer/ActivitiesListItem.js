import React, { Component } from "react";
import { Link } from 'react-router-dom';
import utils from "../../helpers/utils";

let id = 1;

const ActivitiesListItem = ({ item }) => (
  <tr scope="row" key={item.id}>
    <th>{id++}</th>
    <td style={{ textAlign: "left" }}>
      <Link to={`/activity/${item.id}`} state={{item: item}}>{item.name}</Link>
    </td>
    <td>{utils.convertDistance(item.distance)}</td>
    <td>{utils.convertTime(item.moving_time)}</td>
    <td />
  </tr>
);

export default ActivitiesListItem;
