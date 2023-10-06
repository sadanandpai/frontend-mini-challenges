console.clear()

let PIECE_DIR_CALC = 0

class Utils {
  static colToInt(col) {
    return Board.COLS.indexOf(col)
  }
  static rowToInt(row) {
    return Board.ROWS.indexOf(row)
  }
  static intToCol(int) {
    return Board.COLS[int]
  }
  static intToRow(int) {
    return Board.ROWS[int]
  }

  static getPositionsFromShortCode(shortCode) {
    const positions = Utils.getInitialPiecePositions()
    const overrides = {}
    const defaultPositionMode = shortCode.charAt(0) === "X"
    if (defaultPositionMode) {
      shortCode = shortCode.slice(1)
    }
    shortCode.split(",").forEach(string => {
      const promoted = string.charAt(0) === "P"
      if (promoted) {
        string = string.slice(1)
      }
      if (defaultPositionMode) {
        const inactive = string.length === 3
        const id = string.slice(0, 2)
        const col = inactive ? undefined : string.charAt(2)
        const row = inactive ? undefined : string.charAt(3)
        const moves = string.charAt(4) || "1"
        overrides[id] = {
          col,
          row,
          active: !inactive,
          _moves: parseInt(moves),
          _promoted: promoted
        }
      } else {
        const moved = string.length >= 4
        const id = string.slice(0, 2)
        const col = string.charAt(moved ? 2 : 0)
        const row = string.charAt(moved ? 3 : 1)
        const moves = string.charAt(4) || moved ? "1" : "0"
        overrides[id] = {
          col,
          row,
          active: true,
          _moves: parseInt(moves),
          _promoted: promoted
        }
      }
    })
    for (let id in positions) {
      if (overrides[id]) {
        positions[id] = overrides[id]
      } else {
        positions[id] = defaultPositionMode ? positions[id] : { active: false }
      }
    }
    return positions
  }

  static getInitialBoardPieces(parent, pieces) {
    const boardPieces = {}
    const container = document.createElement("div")
    container.className = "pieces"
    parent.appendChild(container)
    for (let pieceId in pieces) {
      const boardPiece = document.createElement("div")
      boardPiece.className = `piece ${pieces[
        pieceId
      ].data.player.toLowerCase()}`
      boardPiece.innerHTML = pieces[pieceId].shape()
      container.appendChild(boardPiece)
      boardPieces[pieceId] = boardPiece
    }
    return boardPieces
  }

  static getInitialBoardTiles(parent, handler) {
    const tiles = { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} }
    const board = document.createElement("div")
    board.className = "board"
    parent.appendChild(board)
    for (let i = 0; i < 8; i++) {
      const row = document.createElement("div")
      row.className = "row"
      board.appendChild(row)
      for (let j = 0; j < 8; j++) {
        const tile = document.createElement("button")
        tile.className = "tile"
        const r = Utils.intToRow(i)
        const c = Utils.intToCol(j)
        tile.addEventListener("click", () => handler({ row: r, col: c }))
        row.appendChild(tile)
        tiles[r][c] = tile
      }
    }
    return tiles
  }

  static getInitialBoardState(construct = () => undefined) {
    const blankRow = () => ({
      A: construct(),
      B: construct(),
      C: construct(),
      D: construct(),
      E: construct(),
      F: construct(),
      G: construct(),
      H: construct()
    })
    return {
      1: { ...blankRow() },
      2: { ...blankRow() },
      3: { ...blankRow() },
      4: { ...blankRow() },
      5: { ...blankRow() },
      6: { ...blankRow() },
      7: { ...blankRow() },
      8: { ...blankRow() }
    }
  }

  static getInitialPiecePositions() {
    return {
      A8: { active: true, row: "8", col: "A" },
      B8: { active: true, row: "8", col: "B" },
      C8: { active: true, row: "8", col: "C" },
      D8: { active: true, row: "8", col: "D" },
      E8: { active: true, row: "8", col: "E" },
      F8: { active: true, row: "8", col: "F" },
      G8: { active: true, row: "8", col: "G" },
      H8: { active: true, row: "8", col: "H" },
      A7: { active: true, row: "7", col: "A" },
      B7: { active: true, row: "7", col: "B" },
      C7: { active: true, row: "7", col: "C" },
      D7: { active: true, row: "7", col: "D" },
      E7: { active: true, row: "7", col: "E" },
      F7: { active: true, row: "7", col: "F" },
      G7: { active: true, row: "7", col: "G" },
      H7: { active: true, row: "7", col: "H" },
      A2: { active: true, row: "2", col: "A" },
      B2: { active: true, row: "2", col: "B" },
      C2: { active: true, row: "2", col: "C" },
      D2: { active: true, row: "2", col: "D" },
      E2: { active: true, row: "2", col: "E" },
      F2: { active: true, row: "2", col: "F" },
      G2: { active: true, row: "2", col: "G" },
      H2: { active: true, row: "2", col: "H" },
      A1: { active: true, row: "1", col: "A" },
      B1: { active: true, row: "1", col: "B" },
      C1: { active: true, row: "1", col: "C" },
      D1: { active: true, row: "1", col: "D" },
      E1: { active: true, row: "1", col: "E" },
      F1: { active: true, row: "1", col: "F" },
      G1: { active: true, row: "1", col: "G" },
      H1: { active: true, row: "1", col: "H" }
    }
  }

  static getInitialPieces() {
    return {
      A8: new Piece({ id: "A8", player: "BLACK", type: "ROOK" }),
      B8: new Piece({ id: "B8", player: "BLACK", type: "KNIGHT" }),
      C8: new Piece({ id: "C8", player: "BLACK", type: "BISHOP" }),
      D8: new Piece({ id: "D8", player: "BLACK", type: "QUEEN" }),
      E8: new Piece({ id: "E8", player: "BLACK", type: "KING" }),
      F8: new Piece({ id: "F8", player: "BLACK", type: "BISHOP" }),
      G8: new Piece({ id: "G8", player: "BLACK", type: "KNIGHT" }),
      H8: new Piece({ id: "H8", player: "BLACK", type: "ROOK" }),
      A7: new Piece({ id: "A7", player: "BLACK", type: "PAWN" }),
      B7: new Piece({ id: "B7", player: "BLACK", type: "PAWN" }),
      C7: new Piece({ id: "C7", player: "BLACK", type: "PAWN" }),
      D7: new Piece({ id: "D7", player: "BLACK", type: "PAWN" }),
      E7: new Piece({ id: "E7", player: "BLACK", type: "PAWN" }),
      F7: new Piece({ id: "F7", player: "BLACK", type: "PAWN" }),
      G7: new Piece({ id: "G7", player: "BLACK", type: "PAWN" }),
      H7: new Piece({ id: "H7", player: "BLACK", type: "PAWN" }),
      A2: new Piece({ id: "A2", player: "WHITE", type: "PAWN" }),
      B2: new Piece({ id: "B2", player: "WHITE", type: "PAWN" }),
      C2: new Piece({ id: "C2", player: "WHITE", type: "PAWN" }),
      D2: new Piece({ id: "D2", player: "WHITE", type: "PAWN" }),
      E2: new Piece({ id: "E2", player: "WHITE", type: "PAWN" }),
      F2: new Piece({ id: "F2", player: "WHITE", type: "PAWN" }),
      G2: new Piece({ id: "G2", player: "WHITE", type: "PAWN" }),
      H2: new Piece({ id: "H2", player: "WHITE", type: "PAWN" }),
      A1: new Piece({ id: "A1", player: "WHITE", type: "ROOK" }),
      B1: new Piece({ id: "B1", player: "WHITE", type: "KNIGHT" }),
      C1: new Piece({ id: "C1", player: "WHITE", type: "BISHOP" }),
      D1: new Piece({ id: "D1", player: "WHITE", type: "QUEEN" }),
      E1: new Piece({ id: "E1", player: "WHITE", type: "KING" }),
      F1: new Piece({ id: "F1", player: "WHITE", type: "BISHOP" }),
      G1: new Piece({ id: "G1", player: "WHITE", type: "KNIGHT" }),
      H1: new Piece({ id: "H1", player: "WHITE", type: "ROOK" })
    }
  }
}

class Shape {
  static shape(player, piece) {
    return `<svg class="${player}" width="170" height="170" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href="#${piece}" />
    </svg>`
  }
  static shapeBishop(player) {
    return Shape.shape(player, "bishop")
  }
  static shapeKing(player) {
    return Shape.shape(player, "king")
  }
  static shapeKnight(player) {
    return Shape.shape(player, "knight")
  }
  static shapePawn(player) {
    return Shape.shape(player, "pawn")
  }
  static shapeQueen(player) {
    return Shape.shape(player, "queen")
  }
  static shapeRook(player) {
    return Shape.shape(player, "rook")
  }
}

class Constraints {
  static generate(args, resultingChecks) {
    let method
    const { piecePositions, piece } = args
    if (piecePositions[piece.data.id].active) {
      switch (piece.data.type) {
        case "BISHOP":
          method = Constraints.constraintsBishop
          break
        case "KING":
          method = Constraints.constraintsKing
          break
        case "KNIGHT":
          method = Constraints.constraintsKnight
          break
        case "PAWN":
          method = Constraints.constraintsPawn
          break
        case "QUEEN":
          method = Constraints.constraintsQueen
          break
        case "ROOK":
          method = Constraints.constraintsRook
          break
      }
    }
    const result = method ? method(args) : { moves: [], captures: [] }
    if (resultingChecks) {
      const moveIndex = args.moveIndex + 1
      result.moves = result.moves.filter(
        location =>
          !resultingChecks({ piece, location, capture: false, moveIndex })
            .length
      )
      result.captures = result.captures.filter(
        location =>
          !resultingChecks({ piece, location, capture: true, moveIndex }).length
      )
    }
    return result
  }

  static constraintsBishop(args) {
    return Constraints.constraintsDiagonal(args)
  }

  static constraintsDiagonal(args) {
    const response = { moves: [], captures: [] }
    const { piece } = args

    Constraints.runUntil(piece.dirNW.bind(piece), response, args)
    Constraints.runUntil(piece.dirNE.bind(piece), response, args)
    Constraints.runUntil(piece.dirSW.bind(piece), response, args)
    Constraints.runUntil(piece.dirSE.bind(piece), response, args)

    return response
  }

  static constraintsKing(args) {
    const { piece, kingCastles, piecePositions } = args
    const moves = []
    const captures = []
    const locations = [
      piece.dirN(1, piecePositions),
      piece.dirNE(1, piecePositions),
      piece.dirE(1, piecePositions),
      piece.dirSE(1, piecePositions),
      piece.dirS(1, piecePositions),
      piece.dirSW(1, piecePositions),
      piece.dirW(1, piecePositions),
      piece.dirNW(1, piecePositions)
    ]
    if (kingCastles) {
      const castles = kingCastles(piece)
      castles.forEach(position => moves.push(position))
    }
    locations.forEach(location => {
      const value = Constraints.relationshipToTile(location, args)
      if (value === "BLANK") {
        moves.push(location)
      } else if (value === "ENEMY") {
        captures.push(location)
      }
    })
    return { moves, captures }
  }

  static constraintsKnight(args) {
    const { piece, piecePositions } = args
    const moves = []
    const captures = []
    const locations = [
      piece.dir(1, 2, piecePositions),
      piece.dir(1, -2, piecePositions),
      piece.dir(2, 1, piecePositions),
      piece.dir(2, -1, piecePositions),
      piece.dir(-1, 2, piecePositions),
      piece.dir(-1, -2, piecePositions),
      piece.dir(-2, 1, piecePositions),
      piece.dir(-2, -1, piecePositions)
    ]
    locations.forEach(location => {
      const value = Constraints.relationshipToTile(location, args)
      if (value === "BLANK") {
        moves.push(location)
      } else if (value === "ENEMY") {
        captures.push(location)
      }
    })
    return { moves, captures }
  }

  static constraintsOrthangonal(args) {
    const { piece } = args
    const response = { moves: [], captures: [] }

    Constraints.runUntil(piece.dirN.bind(piece), response, args)
    Constraints.runUntil(piece.dirE.bind(piece), response, args)
    Constraints.runUntil(piece.dirS.bind(piece), response, args)
    Constraints.runUntil(piece.dirW.bind(piece), response, args)

    return response
  }

  static constraintsPawn(args) {
    const { piece, piecePositions } = args
    const moves = []
    const captures = []
    const locationN1 = piece.dirN(1, piecePositions)
    const locationN2 = piece.dirN(2, piecePositions)

    if (Constraints.relationshipToTile(locationN1, args) === "BLANK") {
      moves.push(locationN1)
      if (
        !piece.moves.length &&
        Constraints.relationshipToTile(locationN2, args) === "BLANK"
      ) {
        moves.push(locationN2)
      }
    }

    ;[
      [piece.dirNW(1, piecePositions), piece.dirW(1, piecePositions)],
      [piece.dirNE(1, piecePositions), piece.dirE(1, piecePositions)]
    ].forEach(([location, enPassant]) => {
      const standardCaptureRelationship = Constraints.relationshipToTile(
        location,
        args
      )
      const enPassantCaptureRelationship = Constraints.relationshipToTile(
        enPassant,
        args
      )
      if (standardCaptureRelationship === "ENEMY") {
        captures.push(location)
      } else if (
        piece.moves.length > 0 &&
        enPassantCaptureRelationship === "ENEMY"
      ) {
        const enPassantRow = enPassant.row === (piece.playerWhite() ? "5" : "4")
        const other = Constraints.locationToPiece(enPassant, args)
        if (enPassantRow && other && other.data.type === "PAWN") {
          if (
            other.moves.length === 1 &&
            other.moves[0] === args.moveIndex - 1
          ) {
            location.capture = { ...enPassant }
            captures.push(location)
          }
        }
      }
    })
    return { moves, captures }
  }

  static constraintsQueen(args) {
    const diagonal = Constraints.constraintsDiagonal(args)
    const orthagonal = Constraints.constraintsOrthangonal(args)
    return {
      moves: diagonal.moves.concat(orthagonal.moves),
      captures: diagonal.captures.concat(orthagonal.captures)
    }
  }

  static constraintsRook(args) {
    return Constraints.constraintsOrthangonal(args)
  }

  static locationToPiece(location, args) {
    if (!location) {
      return undefined
    }
    const { state, pieces } = args
    const row = state[location.row]
    const occupyingId = row === undefined ? undefined : row[location.col]
    return pieces[occupyingId]
  }

  static relationshipToTile(location, args) {
    if (!location) {
      return undefined
    }
    const { piece } = args
    const occupying = Constraints.locationToPiece(location, args)
    if (occupying) {
      return occupying.data.player === piece.data.player ? "FRIEND" : "ENEMY"
    } else {
      return "BLANK"
    }
  }

  static runUntil(locationFunction, response, args) {
    const { piecePositions } = args

    let inc = 1
    let location = locationFunction(inc++, piecePositions)
    while (location) {
      let abort = false
      const relations = Constraints.relationshipToTile(location, args)
      if (relations === "ENEMY") {
        response.captures.push(location)
        abort = true
      } else if (relations === "FRIEND") {
        abort = true
      } else {
        response.moves.push(location)
      }
      if (abort) {
        location = undefined
      } else {
        location = locationFunction(inc++, piecePositions)
      }
    }
  }
}

class Piece {
  moves = []
  promoted = false
  updateShape = false

  constructor(data) {
    this.data = data
  }

  get orientation() {
    return this.data.player === "BLACK" ? -1 : 1
  }

  dirN(steps, positions) {
    return this.dir(steps, 0, positions)
  }
  dirS(steps, positions) {
    return this.dir(-steps, 0, positions)
  }
  dirW(steps, positions) {
    return this.dir(0, -steps, positions)
  }
  dirE(steps, positions) {
    return this.dir(0, steps, positions)
  }
  dirNW(steps, positions) {
    return this.dir(steps, -steps, positions)
  }
  dirNE(steps, positions) {
    return this.dir(steps, steps, positions)
  }
  dirSW(steps, positions) {
    return this.dir(-steps, -steps, positions)
  }
  dirSE(steps, positions) {
    return this.dir(-steps, steps, positions)
  }
  dir(stepsRow, stepsColumn, positions) {
    PIECE_DIR_CALC++
    const row =
      Utils.rowToInt(positions[this.data.id].row) + this.orientation * stepsRow
    const col =
      Utils.colToInt(positions[this.data.id].col) +
      this.orientation * stepsColumn
    if (row >= 0 && row <= 7 && col >= 0 && col <= 7) {
      return { row: Utils.intToRow(row), col: Utils.intToCol(col) }
    }
    return undefined
  }

  move(moveIndex) {
    this.moves.push(moveIndex)
  }

  options(
    moveIndex,
    state,
    pieces,
    piecePositions,
    resultingChecks,
    kingCastles
  ) {
    return Constraints.generate(
      { moveIndex, state, piece: this, pieces, piecePositions, kingCastles },
      resultingChecks
    )
  }

  playerBlack() {
    return this.data.player === "BLACK"
  }
  playerWhite() {
    return this.data.player === "WHITE"
  }

  promote(type = "QUEEN") {
    this.data.type = type
    this.promoted = true
    this.updateShape = true
  }

  shape() {
    const player = this.data.player.toLowerCase()
    switch (this.data.type) {
      case "BISHOP":
        return Shape.shapeBishop(player)
      case "KING":
        return Shape.shapeKing(player)
      case "KNIGHT":
        return Shape.shapeKnight(player)
      case "PAWN":
        return Shape.shapePawn(player)
      case "QUEEN":
        return Shape.shapeQueen(player)
      case "ROOK":
        return Shape.shapeRook(player)
    }
  }
}

class Board {
  checksBlack = []
  checksWhite = []
  piecesTilesCaptures = {}
  piecesTilesMoves = {}
  tilesPiecesBlackCaptures = Utils.getInitialBoardState(() => [])
  tilesPiecesBlackMoves = Utils.getInitialBoardState(() => [])
  tilesPiecesWhiteCaptures = Utils.getInitialBoardState(() => [])
  tilesPiecesWhiteMoves = Utils.getInitialBoardState(() => [])

  pieceIdsBlack = []
  pieceIdsWhite = []
  state = Utils.getInitialBoardState()

  static COLS = ["A", "B", "C", "D", "E", "F", "G", "H"]
  static ROWS = ["1", "2", "3", "4", "5", "6", "7", "8"]

  constructor(pieces, piecePositions) {
    this.pieces = pieces
    for (let id in pieces) {
      if (pieces[id].playerWhite()) {
        this.pieceIdsWhite.push(id)
      } else {
        this.pieceIdsBlack.push(id)
      }
    }
    this.initializePositions(piecePositions)
  }

  initializePositions(piecePositions) {
    this.piecePositions = piecePositions
    this.initializeState()
    this.piecesUpdate(0)
  }

  initializeState() {
    for (let pieceId in this.pieces) {
      const { row, col, active, _moves, _promoted } = this.piecePositions[
        pieceId
      ]
      if (_moves) {
        delete this.piecePositions[pieceId]._moves
        // TODO: come back to this
        // this.pieces[pieceId].moves = new Array(_moves);
      }
      if (_promoted) {
        delete this.piecePositions[pieceId]._promoted
        this.pieces[pieceId].promote()
      }
      if (active) {
        this.state[row] = this.state[row] || []
        this.state[row][col] = pieceId
      }
    }
  }

  kingCastles(king) {
    const castles = []
    // king has to not have moved
    if (king.moves.length) {
      return castles
    }
    const kingIsWhite = king.playerWhite()
    const moves = kingIsWhite
      ? this.tilesPiecesBlackMoves
      : this.tilesPiecesWhiteMoves
    const checkPositions = (row, rookCol, castles) => {
      const cols = rookCol === "A" ? ["D", "C", "B"] : ["F", "G"]
      // rook has to not have moved
      const rookId = `${rookCol}${row}`
      const rook = this.pieces[rookId]
      const { active } = this.piecePositions[rookId]
      if (active && rook.moves.length === 0) {
        let canCastle = true
        cols.forEach(col => {
          // each tile has to be empty
          if (this.state[row][col]) {
            canCastle = false
            // each tile cant be in the path of the other team
          } else if (moves[row][col].length) {
            canCastle = false
          }
        })
        if (canCastle) {
          castles.push({ col: cols[1], row, castles: rookCol })
        }
      }
    }
    const row = kingIsWhite ? "1" : "8"
    if (!this.pieces[`A${row}`].moves.length) {
      checkPositions(row, "A", castles)
    }
    if (!this.pieces[`H${row}`].moves.length) {
      checkPositions(row, "H", castles)
    }
    return castles
  }

  kingCheckStates(kingPosition, captures, piecePositions) {
    const { col, row } = kingPosition
    return captures[row][col]
      .map(id => piecePositions[id])
      .filter(pos => pos.active)
  }

  pieceCalculateMoves(
    pieceId,
    moveIndex,
    state,
    piecePositions,
    piecesTilesCaptures,
    piecesTilesMoves,
    tilesPiecesCaptures,
    tilesPiecesMoves,
    resultingChecks,
    kingCastles
  ) {
    const { captures, moves } = this.pieces[pieceId].options(
      moveIndex,
      state,
      this.pieces,
      piecePositions,
      resultingChecks,
      kingCastles
    )
    piecesTilesCaptures[pieceId] = Array.from(captures)
    piecesTilesMoves[pieceId] = Array.from(moves)
    captures.forEach(({ col, row }) =>
      tilesPiecesCaptures[row][col].push(pieceId)
    )
    moves.forEach(({ col, row }) => tilesPiecesMoves[row][col].push(pieceId))
  }

  pieceCapture(piece) {
    const pieceId = piece.data.id
    const { col, row } = this.piecePositions[pieceId]
    this.state[row][col] = undefined
    delete this.piecePositions[pieceId].col
    delete this.piecePositions[pieceId].row
    this.piecePositions[pieceId].active = false
  }

  pieceMove(piece, location) {
    const pieceId = piece.data.id
    const { row, col } = this.piecePositions[pieceId]
    this.state[row][col] = undefined
    this.state[location.row][location.col] = pieceId
    this.piecePositions[pieceId].row = location.row
    this.piecePositions[pieceId].col = location.col
    if (
      piece.data.type === "PAWN" &&
      (location.row === "8" || location.row === "1")
    ) {
      piece.promote()
    }
  }

  piecesUpdate(moveIndex) {
    this.tilesPiecesBlackCaptures = Utils.getInitialBoardState(() => [])
    this.tilesPiecesBlackMoves = Utils.getInitialBoardState(() => [])
    this.tilesPiecesWhiteCaptures = Utils.getInitialBoardState(() => [])
    this.tilesPiecesWhiteMoves = Utils.getInitialBoardState(() => [])

    this.pieceIdsBlack.forEach(id =>
      this.pieceCalculateMoves(
        id,
        moveIndex,
        this.state,
        this.piecePositions,
        this.piecesTilesCaptures,
        this.piecesTilesMoves,
        this.tilesPiecesBlackCaptures,
        this.tilesPiecesBlackMoves,
        this.resultingChecks.bind(this),
        this.kingCastles.bind(this)
      )
    )
    this.pieceIdsWhite.forEach(id =>
      this.pieceCalculateMoves(
        id,
        moveIndex,
        this.state,
        this.piecePositions,
        this.piecesTilesCaptures,
        this.piecesTilesMoves,
        this.tilesPiecesWhiteCaptures,
        this.tilesPiecesWhiteMoves,
        this.resultingChecks.bind(this),
        this.kingCastles.bind(this)
      )
    )

    this.checksBlack = this.kingCheckStates(
      this.piecePositions.E1,
      this.tilesPiecesBlackCaptures,
      this.piecePositions
    )
    this.checksWhite = this.kingCheckStates(
      this.piecePositions.E8,
      this.tilesPiecesWhiteCaptures,
      this.piecePositions
    )
  }

  resultingChecks({ piece, location, capture, moveIndex }) {
    const tilesPiecesCaptures = Utils.getInitialBoardState(() => [])
    const tilesPiecesMoves = Utils.getInitialBoardState(() => [])
    const piecesTilesCaptures = {}
    const piecesTilesMoves = {}
    const state = JSON.parse(JSON.stringify(this.state))
    const piecePositions = JSON.parse(JSON.stringify(this.piecePositions))
    if (capture) {
      const loc = location.capture || location
      const capturedId = state[loc.row][loc.col]
      if (this.pieces[capturedId].data.type === "KING") {
        // this is a checking move
      } else {
        delete piecePositions[capturedId].col
        delete piecePositions[capturedId].row
        piecePositions[capturedId].active = false
      }
    }
    const pieceId = piece.data.id
    const { row, col } = piecePositions[pieceId]
    state[row][col] = undefined
    state[location.row][location.col] = pieceId
    piecePositions[pieceId].row = location.row
    piecePositions[pieceId].col = location.col

    const ids = piece.playerWhite() ? this.pieceIdsBlack : this.pieceIdsWhite
    const king = piece.playerWhite() ? piecePositions.E1 : piecePositions.E8
    ids.forEach(id =>
      this.pieceCalculateMoves(
        id,
        moveIndex,
        state,
        piecePositions,
        piecesTilesCaptures,
        piecesTilesMoves,
        tilesPiecesCaptures,
        tilesPiecesMoves
      )
    )
    return this.kingCheckStates(king, tilesPiecesCaptures, piecePositions)
  }

  tileEach(callback) {
    Board.ROWS.forEach(row => {
      Board.COLS.forEach(col => {
        const piece = this.tileFind({ row, col })
        const moves = piece ? this.piecesTilesMoves[piece.data.id] : undefined
        const captures = piece
          ? this.piecesTilesCaptures[piece.data.id]
          : undefined
        callback({ row, col }, piece, moves, captures)
      })
    })
  }

  tileFind({ row, col }) {
    const id = this.state[row][col]
    return this.pieces[id]
  }

  toShortCode() {
    const positionsAbsolute = []
    const positionsDefaults = []
    for (let id in this.piecePositions) {
      const { active, col, row } = this.piecePositions[id]
      const pos = `${col}${row}`
      const moves = this.pieces[id].moves
      const promotedCode = this.pieces[id].promoted ? "P" : ""
      const movesCode = moves > 9 ? "9" : moves > 1 ? moves.toString() : ""
      if (active) {
        positionsAbsolute.push(
          `${promotedCode}${id}${id === pos ? "" : pos}${movesCode}`
        )
        if (id !== pos || moves > 0) {
          positionsDefaults.push(`${promotedCode}${id}${pos}${movesCode}`)
        }
      } else {
        if (id !== "BQ" && id !== "WQ") {
          positionsDefaults.push(`${promotedCode}${id}X`)
        }
      }
    }
    const pA = positionsAbsolute.join(",")
    const pD = positionsDefaults.join(",")
    return pA.length > pD.length ? `X${pD}` : pA
  }
}

class Game {
  active = null
  activePieceOptions = []
  moveIndex = 0
  moves = []

  constructor(pieces, piecePositions, turn = "WHITE") {
    this.turn = turn
    this.board = new Board(pieces, piecePositions)
  }

  activate(location) {
    const tilePiece = this.board.tileFind(location)
    if (tilePiece && !this.active && tilePiece.data.player !== this.turn) {
      this.active = null
      return { type: "INVALID" }
      // a piece is active rn
    } else if (this.active) {
      const activePieceId = this.active.data.id
      this.active = null
      const validatedPosition = this.activePieceOptions.find(
        option => option.col === location.col && option.row === location.row
      )
      const positionIsValid = !!validatedPosition
      this.activePieceOptions = []
      const capturePiece = validatedPosition?.capture
        ? this.board.tileFind(validatedPosition.capture)
        : tilePiece

      // a piece is on the tile
      if (capturePiece) {
        const capturedPieceId = capturePiece.data.id
        // cancelling the selected piece on invalid location
        if (capturedPieceId === activePieceId) {
          return { type: "CANCEL" }
        } else if (positionIsValid) {
          // capturing the selected piece
          this.capture(activePieceId, capturedPieceId, location)
          return {
            type: "CAPTURE",
            activePieceId,
            capturedPieceId,
            captures: [location]
          }
          // cancel
        } else if (capturePiece.data.player !== this.turn) {
          return { type: "CANCEL" }
        } else {
          // proceed to TOUCH or CANCEL
        }
      } else if (positionIsValid) {
        // moving will return castled if that happens (only two move)
        const castledId = this.move(activePieceId, location)
        return { type: "MOVE", activePieceId, moves: [location], castledId }
        // invalid spot. cancel.
      } else {
        return { type: "CANCEL" }
      }
    }

    // no piece selected or new CANCEL + TOUCH
    if (tilePiece) {
      const tilePieceId = tilePiece.data.id
      const moves = this.board.piecesTilesMoves[tilePieceId]
      const captures = this.board.piecesTilesCaptures[tilePieceId]
      if (!moves.length && !captures.length) {
        return { type: "INVALID" }
      }
      this.active = tilePiece
      this.activePieceOptions = moves.concat(captures)
      return { type: "TOUCH", captures, moves, activePieceId: tilePieceId }
      // cancelling
    } else {
      this.activePieceOptions = []
      return { type: "CANCEL" }
    }
  }

  capture(capturingPieceId, capturedPieceId, location) {
    const captured = this.board.pieces[capturedPieceId]
    this.board.pieceCapture(captured)
    this.move(capturingPieceId, location, true)
  }

  handleCastling(piece, location) {
    if (
      piece.data.type !== "KING" ||
      piece.moves.length ||
      location.row !== (piece.playerWhite() ? "1" : "8") ||
      (location.col !== "C" && location.col !== "G")
    ) {
      return
    }

    return `${location.col === "C" ? "A" : "H"}${location.row}`
  }

  move(pieceId, location, capture = false) {
    const piece = this.board.pieces[pieceId]
    const castledId = this.handleCastling(piece, location)
    piece.move(this.moveIndex)
    if (castledId) {
      const castled = this.board.pieces[castledId]
      castled.move(this.moveIndex)
      this.board.pieceMove(castled, {
        col: location.col === "C" ? "D" : "F",
        row: location.row
      })
      this.moves.push(`${pieceId}O${location.col}${location.row}`)
    } else {
      this.moves.push(
        `${pieceId}${capture ? "x" : ""}${location.col}${location.row}`
      )
    }
    this.moveIndex++
    this.board.pieceMove(piece, location)
    this.turn = this.turn === "WHITE" ? "BLACK" : "WHITE"
    this.board.piecesUpdate(this.moveIndex)
    const state = this.moveResultState()
    console.log(state)
    if (!state.moves && !state.captures) {
      alert(
        state.stalemate
          ? "Stalemate!"
          : `${this.turn === "WHITE" ? "Black" : "White"} Wins!`
      )
    }
    return castledId
  }

  moveResultState() {
    let movesWhite = 0
    let capturesWhite = 0
    let movesBlack = 0
    let capturesBlack = 0
    this.board.tileEach(({ row, col }) => {
      movesWhite += this.board.tilesPiecesWhiteMoves[row][col].length
      capturesWhite += this.board.tilesPiecesWhiteCaptures[row][col].length
      movesBlack += this.board.tilesPiecesBlackMoves[row][col].length
      capturesBlack += this.board.tilesPiecesBlackCaptures[row][col].length
    })
    const activeBlack = this.board.pieceIdsBlack.filter(
      pieceId => this.board.piecePositions[pieceId].active
    ).length
    const activeWhite = this.board.pieceIdsWhite.filter(
      pieceId => this.board.piecePositions[pieceId].active
    ).length
    const moves = this.turn === "WHITE" ? movesWhite : movesBlack
    const captures = this.turn === "WHITE" ? capturesWhite : capturesBlack
    const noMoves =
      movesWhite + capturesWhite + movesBlack + capturesBlack === 0
    const checked = !!this.board[
      this.turn === "WHITE" ? "checksBlack" : "checksWhite"
    ].length
    const onlyKings = activeBlack === 1 && activeWhite === 1
    const stalemate =
      onlyKings || noMoves || (moves + captures === 0 && !checked)
    const code = this.board.toShortCode()
    return { turn: this.turn, checked, moves, captures, code, stalemate }
  }

  randomMove() {
    if (this.active) {
      if (this.activePieceOptions.length) {
        const { col, row } = this.activePieceOptions[
          Math.floor(Math.random() * this.activePieceOptions.length)
        ]
        return { col, row }
      } else {
        const { col, row } = this.board.piecePositions[this.active.data.id]
        return { col, row }
      }
    } else {
      const ids =
        this.turn === "WHITE"
          ? this.board.pieceIdsWhite
          : this.board.pieceIdsBlack
      const positions = ids
        .map(pieceId => {
          const moves = this.board.piecesTilesMoves[pieceId]
          const captures = this.board.piecesTilesCaptures[pieceId]
          return moves.length || captures.length
            ? this.board.piecePositions[pieceId]
            : undefined
        })
        .filter(position => position?.active)
      const remaining = positions[Math.floor(Math.random() * positions.length)]
      const { col, row } = remaining || { col: "E", row: "1" }
      return { col, row }
    }
  }
}

class View {
  constructor(element, game, perspective) {
    this.element = element
    this.game = game
    this.setPerspective(perspective || this.game.turn)
    this.tiles = Utils.getInitialBoardTiles(
      this.element,
      this.handleTileClick.bind(this)
    )
    this.pieces = Utils.getInitialBoardPieces(
      this.element,
      this.game.board.pieces
    )
    this.drawPiecePositions()
  }

  drawActivePiece(activePieceId) {
    const { row, col } = this.game.board.piecePositions[activePieceId]
    this.tiles[row][col].classList.add("highlight-active")
    this.pieces[activePieceId].classList.add("highlight-active")
  }

  drawCapturedPiece(capturedPieceId) {
    const piece = this.pieces[capturedPieceId]
    piece.style.setProperty("--transition-delay", "var(--transition-duration)")
    piece.style.removeProperty("--pos-col")
    piece.style.removeProperty("--pos-row")
    piece.style.setProperty("--scale", "0")
  }

  drawPiecePositions(moves = [], moveInner = "") {
    document.body.style.setProperty(
      "--color-background",
      `var(--color-${this.game.turn.toLowerCase()}`
    )
    const other = this.game.turn === "WHITE" ? "turn-black" : "turn-white"
    const current = this.game.turn === "WHITE" ? "turn-white" : "turn-black"
    this.element.classList.add(current)
    this.element.classList.remove(other)
    if (moves.length) {
      this.element.classList.add("touching")
    } else {
      this.element.classList.remove("touching")
    }

    const key = (row, col) => `${row}-${col}`
    const moveKeys = moves.map(({ row, col }) => key(row, col))
    this.game.board.tileEach(
      ({ row, col }, piece, pieceMoves, pieceCaptures) => {
        const tileElement = this.tiles[row][col]
        const move = moveKeys.includes(key(row, col)) ? moveInner : ""
        const format = (id, className) => this.game.board.pieces[id].shape()
        tileElement.innerHTML = `
        <div class="move">${move}</div>
        <div class="moves">
          ${this.game.board.tilesPiecesBlackMoves[row][col]
            .map(id => format(id, "black"))
            .join("")}
          ${this.game.board.tilesPiecesWhiteMoves[row][col]
            .map(id => format(id, "white"))
            .join("")}
        </div>
        <div class="captures">
          ${this.game.board.tilesPiecesBlackCaptures[row][col]
            .map(id => format(id, "black"))
            .join("")}
          ${this.game.board.tilesPiecesWhiteCaptures[row][col]
            .map(id => format(id, "white"))
            .join("")}
        </div>
      `
        if (piece) {
          tileElement.classList.add("occupied")
          const pieceElement = this.pieces[piece.data.id]
          pieceElement.style.setProperty(
            "--pos-col",
            Utils.colToInt(col).toString()
          )
          pieceElement.style.setProperty(
            "--pos-row",
            Utils.rowToInt(row).toString()
          )
          pieceElement.style.setProperty("--scale", "1")
          pieceElement.classList[pieceMoves?.length ? "add" : "remove"](
            "can-move"
          )
          pieceElement.classList[pieceCaptures?.length ? "add" : "remove"](
            "can-capture"
          )
          if (piece.updateShape) {
            piece.updateShape = false
            pieceElement.innerHTML = piece.shape()
          }
        } else {
          tileElement.classList.remove("occupied")
        }
      }
    )
  }

  drawPositions(moves, captures) {
    moves?.forEach(({ row, col }) => {
      this.tiles[row][col].classList.add("highlight-move")
      this.pieces[
        this.game.board.tileFind({ row, col })?.data.id
      ]?.classList.add("highlight-move")
    })
    captures?.forEach(({ row, col, capture }) => {
      if (capture) {
        row = capture.row
        col = capture.col
      }
      this.tiles[row][col].classList.add("highlight-capture")
      this.pieces[
        this.game.board.tileFind({ row, col })?.data.id
      ]?.classList.add("highlight-capture")
    })
  }

  drawResetClassNames() {
    document
      .querySelectorAll(".highlight-active")
      .forEach(element => element.classList.remove("highlight-active"))
    document
      .querySelectorAll(".highlight-capture")
      .forEach(element => element.classList.remove("highlight-capture"))
    document
      .querySelectorAll(".highlight-move")
      .forEach(element => element.classList.remove("highlight-move"))
  }

  handleTileClick(location) {
    const {
      activePieceId,
      capturedPieceId,
      moves = [],
      captures = [],
      type
    } = this.game.activate(location)

    this.drawResetClassNames()
    if (type === "TOUCH") {
      const enPassant = captures.find(capture => !!capture.capture)
      const passingMoves = enPassant ? moves.concat([enPassant]) : moves
      this.drawPiecePositions(
        passingMoves,
        this.game.board.pieces[activePieceId].shape()
      )
    } else {
      this.drawPiecePositions()
    }

    if (type === "CANCEL" || type === "INVALID") {
      return
    }

    if (type === "MOVE" || type === "CAPTURE") {
    } else {
      this.drawActivePiece(activePieceId)
    }
    if (type === "TOUCH") {
      this.drawPositions(moves, captures)
    } else if (type === "CAPTURE") {
      this.drawCapturedPiece(capturedPieceId)
    }
    // crazy town
    // this.setPerspective(this.game.turn);
  }

  setPerspective(perspective) {
    const other =
      perspective === "WHITE" ? "perspective-black" : "perspective-white"
    const current =
      perspective === "WHITE" ? "perspective-white" : "perspective-black"
    this.element.classList.add(current)
    this.element.classList.remove(other)
  }
}

class Control {
  inputSpeedAsap = document.getElementById("speed-asap")
  inputSpeedFast = document.getElementById("speed-fast")
  inputSpeedMedium = document.getElementById("speed-medium")
  inputSpeedSlow = document.getElementById("speed-slow")
  inputRandomBlack = document.getElementById("black-random")
  inputRandomWhite = document.getElementById("white-random")
  inputPerspectiveBlack = document.getElementById("black-perspective")
  inputPerspectiveWhite = document.getElementById("white-perspective")

  constructor(game, view) {
    this.game = game
    this.view = view
    this.inputPerspectiveBlack.addEventListener(
      "change",
      this.updateViewPerspective.bind(this)
    )
    this.inputPerspectiveWhite.addEventListener(
      "change",
      this.updateViewPerspective.bind(this)
    )
    this.updateViewPerspective()
  }

  get speed() {
    if (this.inputSpeedAsap.checked) {
      return 50
    }
    if (this.inputSpeedFast.checked) {
      return 250
    }
    if (this.inputSpeedMedium.checked) {
      return 500
    }
    if (this.inputSpeedSlow.checked) {
      return 1000
    }
  }

  autoplay() {
    const input =
      this.game.turn === "WHITE" ? this.inputRandomWhite : this.inputRandomBlack
    if (!input.checked) {
      setTimeout(this.autoplay.bind(this), this.speed)
      return
    }
    const position = this.game.randomMove()
    this.view.handleTileClick(position)
    setTimeout(this.autoplay.bind(this), this.speed)
  }

  updateViewPerspective() {
    this.view.setPerspective(
      this.inputPerspectiveBlack.checked ? "BLACK" : "WHITE"
    )
  }
}

const DEMOS = {
  castle1: "XD8B3,B1X,C1X,D1X,F1X,G1X",
  castle2: "XD8B3,B1X,C1X,C2X,D1X,F1X,G1X",
  castle3: "XD8E3,B1X,C1X,F2X,D1X,F1X,G1X",
  promote1: "E1,E8,C2C7",
  promote2: "E1,E8E7,PC2C8",
  start: "XE7E6,F7F5,D2D4,E2E5",
  test2: "C8E2,E8,G8H1,D7E4,H7H3,PA2H7,PB2G7,D2D6,E2E39,A1H2,E1B3",
  test: "C8E2,E8,G8H1,D7E4,H7H3,D1H7,PB2G7,D2D6,E2E39,A1H2,E1B3"
}

const initialPositions = Utils.getInitialPiecePositions()
// const initialPositions = Utils.getPositionsFromShortCode(DEMOS.castle1);
const initialTurn = "WHITE"
const perspective = "WHITE"
const game = new Game(Utils.getInitialPieces(), initialPositions, initialTurn)
const view = new View(document.getElementById("board"), game, perspective)
const control = new Control(game, view)

control.autoplay()