/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        // add our child score object at the top left corner
        this.addChild(new game.HUD.ScoreItem(5, 5));

        this.addChild(new game.HUD.LiveItem(5, 5));

        this.addChild(new game.HUD.WinItem(5, 5));
    }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend( {
    /**
     * constructor
     */
    init : function (x, y) {
        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 30, 30]);

        // create the font object
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 0.8);

        // font alignment to right, bottom
        this.font.textAlign = "right";
        this.font.textBaseline = "bottom";

        // local copy of the global score
        this.score = -1;
    },

    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        // this.pos.x, this.pos.y are the relative position from the screen right bottom
        this.font.draw (renderer, "Score: "+ game.data.score, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
    }
});

/**
 * a basic HUD item to display lives
 */
game.HUD.LiveItem = me.Renderable.extend( {
    /**
     * constructor
     */
    init : function (x, y) {
        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 30, 100]);

        // create the font object
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 0.8);

        // font alignment to right, bottom
        this.font.textAlign = "right";
        this.font.textBaseline = "bottom";

        // local copy of the global score
        this.lives = -1;
    },

    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.lives !== game.data.lives) {
            this.lives = game.data.lives;
            return true;
        }
        return false;
    },

    /**
     * draw the lives
     */
    draw : function (renderer) {
        // this.pos.x, this.pos.y are the relative position from the screen right bottom
        this.font.draw (renderer, "Lives: " + game.data.lives, me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
    }
});

/**
 * a basic HUD item the win
 */
game.HUD.WinItem = me.Renderable.extend( {
    /**
     * constructor
     */
    init : function (x, y) {
        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 350, 800]);

        // create the font object
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 2);

        // font alignment to right, bottom
        this.font.textAlign = "right";
        this.font.textBaseline = "bottom";

        // local copy of the global score
        this.win = false;
    },

    /**
     * update function
     */
    update : function (dt) {
        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.win !== game.data.win) {
            this.win = game.data.win;
            return true;
        }
        return false;
    },

    /**
     * draw the win
     */
    draw : function (renderer) {
        // this.pos.x, this.pos.y are the relative position from the screen right bottom
        if(this.win){
            this.font.draw (renderer, "You won!!!", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
        }else{
            this.font.draw (renderer, "", me.game.viewport.width + this.pos.x, me.game.viewport.height + this.pos.y);
        }
    }
});

