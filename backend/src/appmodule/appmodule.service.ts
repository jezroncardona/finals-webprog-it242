import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AppmoduleService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    // These keys come from your Vercel Environment Variables
    const url = this.configService.get<string>('SUPABASE_URL') as string;
    const key = this.configService.get<string>('SUPABASE_KEY') as string;
    
    this.supabase = createClient(url, key);
  }

  async getAllStudyData() {
    const { data, error } = await this.supabase
      .from('guestbook') 
      .select('*');

    if (error) throw error;
    return data;
  }
}