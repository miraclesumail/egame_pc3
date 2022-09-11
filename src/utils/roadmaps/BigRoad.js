import RoadmapUtilities from './RoadmapUtilities'

import _findLastIndex from 'lodash/findLastIndex'
import _defaultsDeep from 'lodash/defaultsDeep'
import _get from 'lodash/get'

export default class BigRoad extends RoadmapUtilities {
  constructor (_options) {
    super()

    const options = _defaultsDeep(_options, {
      results: [],
      rows: 6,
      cols: 26
    })

    for (const key in options) {
      this[key] = options[key]
    }

    this.previousCoordinates = [0, 0]
    this.previousIdentity = null
    this.index = 0

    this.matrix = Array.from({ length: this.rows }, () => {
      return Array.from({ length: this.cols }, () => 0)
    })

    this.results.forEach(this.push.bind(this))
  }

  getNextCoordinate (identity) {
    const [prevRow, prevColumn] = this.previousCoordinates

    if (this.previousIdentity === null) {
      return [0, 0]
    }

    if (this.previousIdentity === identity) {
      const bottomPosition = _get(this.matrix, [prevRow + 1, prevColumn])

      if (bottomPosition === 0) {
        return [prevRow + 1, prevColumn]
      }

      return [prevRow, prevColumn + 1]
    }

    const lastColIdx = _findLastIndex(this.matrix[0], Boolean)
    const initialPosition = _get(this.matrix, [0, lastColIdx])

    if (initialPosition === 0) {
      return [0, lastColIdx]
    }

    return [0, lastColIdx + 1]
  }

  push (key) {
    const identity = this.identityDictionary[key]

    if (!identity) {
      return console.warn(`${key} is not a valid key.`)
    }

    const isTie = this.tieIdentities.includes(key)

    const [nextRow, nextCol] = this.getNextCoordinate(identity)
    const [prevRow, prevCol] = JSON.parse(JSON.stringify(this.previousCoordinates))

    const prevColValue = _get(this.matrix[prevRow][prevCol], 'value')
    const isAnotherTie = isTie && this.tieIdentities.includes(prevColValue)

    if (!prevColValue && isTie) {
      this.matrix[prevRow][prevCol] = {
        value: key,
        index: this.index++,
        tie_count: isTie ? 1 : 0
      }
      return
    }

    if (isAnotherTie) {
      const value = this.matrix[prevRow][prevCol].tie_count
      value === 0 ? this.matrix[prevRow][prevCol].tie_count = 1 : this.matrix[prevRow][prevCol].tie_count++
      return
    }
    if (isTie) {
      const data = this.matrix[prevRow][prevCol]
      data.tie_count === 0 ? data.tie_count = 1 : data.tie_count++
      return
    } else if (this.matrix[prevRow][prevCol] && this.matrix[prevRow][prevCol].value === 't') {
      this.previousCoordinates = [nextRow, nextCol]
      this.previousIdentity = identity
      this.matrix[prevRow][prevRow] = {
        value: key,
        index: this.index++,
        tie_count: this.matrix[prevRow][prevCol].tie_count
      }
      return
    }

    this.previousCoordinates = [nextRow, nextCol]
    this.previousIdentity = identity

    this.matrix[nextRow][nextCol] = {
      value: key,
      index: this.index++,
      tie_count: isTie ? 1 : 0
    }

    if (this.hasFullRow) {
      this.matrix = this.truncateFirstColumn()
      this.previousCoordinates = [nextRow, nextCol - 1]
    }
  }
}
