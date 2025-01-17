import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

async function saveCanvasData(stickers, designers, backgroundColor, dotColor, existingCanvasId = null) {
    let result;
    if (existingCanvasId) {
        result = await supabase
            .from('moji_data')
            .update({
                stickers: stickers,
                designers: designers,
                backgroundColor: backgroundColor,
                dotColor: dotColor,
            })
            .eq('id', existingCanvasId)
            .select();
    } else {
        result = await supabase
            .from('moji_data')
            .insert({
                stickers: stickers,
                designers: designers,
                backgroundColor: backgroundColor,
                dotColor: dotColor,
            })
            .select();
    }

    const { data, error } = result;
    if (error) throw error;
    return data[0].id;
}

async function getCanvasData(id) {
    const { data, error } = await supabase.from('moji_data').select('*').eq('id', id).single();
    if (error) throw error;
    console.log(data);
    return data;
}

export { saveCanvasData, getCanvasData };